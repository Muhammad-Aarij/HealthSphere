import React from 'react'
import { View } from 'react-native'
import styles from 'styles.css'

export default function index() {
    const [btn, setButton] = useState(3);
    const flatListRef = useRef(null);

    const SliderData = [
        { image: require('../assets/images/5.png'), name: "Super Delicious Burger", url: "https://burgerlab.com.pk/" },
        { image: require('../assets/images/1.png'), name: "Organic and Fresh Vegetables", url: "https://islamabadgrocery.store/product-category/fruits-vegetables/" },
        { image: require('../assets/images/2.png'), name: "Delicious Pizza", url: "https://www.foodpanda.pk/chain/cw0ew/my-pizza-hut" },
        { image: require('../assets/images/3.png'), name: "Fresh Vegetables", url: "https://islamabadgrocery.store/product-category/fruits-vegetables/" },
        { image: require('../assets/images/4.png'), name: "Fresh Fruits", url: "https://farmtohome.com.pk/checkout?gad_source=1&gclid=Cj0KCQjwmOm3BhC8ARIsAOSbapULq6BGlexnM36wu6O_UdwIwRalLzfibwIanoJyWe-cCnBoBBVBgQkaAgPAEALw_wcB" },
    ];

    const openWebsite = (url) => {
        Linking.openURL(url)
            .catch(err => console.error("Failed to open URL", err));
    };

    const handleSlide = (index) => {
        setTimeout(() => {
            setButton(index);
        }, 700);

        if (flatListRef.current) {
            flatListRef.current.scrollToIndex({ index: index - 1 });
        }
    };

    const sliderMover = (status) => {
        if (status === "next") {
            if (btn < SliderData.length)
                handleSlide(btn + 1);
        } else {
            if (btn > 1)
                handleSlide(btn - 1);
        }
    }

    useEffect(() => {

        setTimeout(() => {
            sliderMover("next");
        }, 2000);

    }, [btn])

    const onViewableItemsChanged = useCallback(({ viewableItems }) => {
        console.log("Callbacks");
        if (viewableItems && viewableItems.length > 0) {
            const visibleIndex = viewableItems[0].index;
            setButton(visibleIndex + 1);
        }
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.sliderWrapper}>
                <FlatList
                    ref={flatListRef}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    contentContainerStyle={styles.flatListContent}
                    data={SliderData}
                    renderItem={({ item }) => (
                        <Pressable style={styles.sliderItem} onPress={() => { openWebsite(item.url); }}>
                            <View style={styles.sliderTile}>
                                <Image style={styles.image} source={item.image} />
                            </View>

                            <Text style={styles.sliderText}>{item.name}</Text>
                        </Pressable>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    onViewableItemsChanged={onViewableItemsChanged}
                />
            </View>

            <View style={styles.btnContainer}>
                {SliderData.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => handleSlide(index + 1)}>
                        <Icon name="circle" size={15} color={btn === index + 1 ? "#ff844b" : "#ffe2d4"} />
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.arrowContainer}>
                <TouchableOpacity style={styles.arrowBtnLeft} onPress={() => { sliderMover("prev") }}>
                    <Icon name="chevron-left" size={16} color="#fffdfc" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.arrowBtnRight} onPress={() => { sliderMover("next") }}>
                    <Icon name="chevron-right" size={16} color="#fffdfc" />
                </TouchableOpacity>
            </View>
        </View>
    );
}