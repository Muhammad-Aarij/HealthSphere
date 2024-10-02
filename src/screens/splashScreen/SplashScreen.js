import React, { useState, useRef, useEffect, useCallback } from 'react'
import { View, TouchableOpacity, Text, Image, FlatList, Pressable, } from 'react-native'
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../../components/CustomButton';

export default function SplashScreen({navigation}) {

    const [btn, setButton] = useState(1);
    const flatListRef = useRef(null);

    const SliderData = [
        { image: require('../../assets/images/splash2.png'), name: "Delicious Pizza", url: "https://www.foodpanda.pk/chain/cw0ew/my-pizza-hut" },
        { image: require('../../assets/images/splash3.png'), name: "Fresh Vegetables", url: "https://islamabadgrocery.store/product-category/fruits-vegetables/" },
    ];

    const openWebsite = (url) => {
        Linking.openURL(url)
            .catch(err => console.error("Failed to open URL", err));
    };
    const handlebtn = () => {
        console.log("handlebtn" + btn);
        if (btn < 2) {
            sliderMover("next");
        }
        else{
            navigation.navigate("signIn");
        }
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
        console.log('====================================');
        console.log("SliderMover");
        if (status === "next") {
            if (btn < SliderData.length)
                handleSlide(btn + 1);
        } else {
            if (btn > 1)
                handleSlide(btn - 1);
        }
    }


    const onViewableItemsChanged = useCallback(({ viewableItems }) => {
        console.log("Callbacks");
        if (viewableItems && viewableItems.length > 0) {
            const visibleIndex = viewableItems[0].index;
            setButton(visibleIndex + 1);
        }
    }, []);

    return (
        <View style={styles.slider}>
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

                            {/* <Text style={styles.sliderText}>{item.name}</Text> */}
                        </Pressable>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    onViewableItemsChanged={onViewableItemsChanged}
                />
                <CustomButton
                    onPress={() => { handlebtn() }}
                    title={btn <= 1 ? "Next" : "Get Started"}
                    theme="dark"
                />
            </View>

            {/* <View style={styles.btnContainer}>
                {SliderData.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => handleSlide(index + 1)}>
                    <Icon name="circle" size={15} color={btn === index + 1 ? "#ff844b" : "#ffe2d4"} />
                    </TouchableOpacity>
                    ))}
                    </View> */}

            {/* <View style={styles.custombtnContainer}>
            </View> */}


        </View>
    );
}