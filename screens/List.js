import React from 'react';
import { 
    View,
    Text,
    StyleSheet ,
    Image,
    Dimensions,
    ImageBackground,
    FlatList,
    ScrollView,
    Animated,
    TouchableOpacity
,} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';

import * as theme from '../theme';

const { width } = Dimensions.get('window');

const mocks = [
    {
        id: 1,
        user: {
            name: 'Lelia Chavez',
            avatar: 'https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Bearded_Man-17-512.png'
        },
        saved: true,
        location: 'Wallis and Futura',
        temperature: 34,
        title: 'Greece 1',
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        rating: 4.7,
        reviews: 3212,
        preview: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
        images: [
            'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
            'https://friendlystock.com/wp-content/uploads/2019/05/5-city-at-night-background-cartoon-clipart.jpg',
            'https://live.staticflickr.com/126/387606063_408c203f6c_b.jpg',
            'https://bgfons.com/uploads/city/city_texture6407.jpg'
        ]
    },
    {
        id: 2,
        user: {
            name: 'Voca Luti',
            avatar: 'https://f0.pngfuel.com/png/312/283/man-face-clip-art-png-clip-art-thumbnail.png'
        },
        saved: false,
        location: 'Los Angeles',
        temperature: 29,
        title: 'Greece 2',
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        rating: 4.8,
        reviews: 4567,
        preview: 'https://pbs.twimg.com/media/DTKEzjmW0AA_B3M.jpg',
        images: [
            'https://pbs.twimg.com/media/DTKEzjmW0AA_B3M.jpg',
            'https://cache.desktopnexus.com/thumbseg/840/840395-bigthumbnail.jpg',
            'https://images.wallpaperscraft.com/image/beauty_city_dubai_lights_evening_water_58630_2560x1600.jpg',
            'https://wallup.net/wp-content/uploads/2019/09/1031730-city-beauty-urban-sunlight-748x503.jpg'
        ]
    },
    {
        id: 3,
        user: {
            name: 'Lucas Poti',
            avatar: 'https://f0.pngfuel.com/png/312/283/man-face-clip-art-png-clip-art-thumbnail.png'
        },
        saved: false,
        location: 'Xeha Ra',
        temperature: 27,
        title: 'Greece 3',
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        rating: 4.5,
        reviews: 1457,
        preview: 'https://wallup.net/wp-content/uploads/2019/09/1031730-city-beauty-urban-sunlight-748x503.jpg',
        images: [
            'https://pbs.twimg.com/media/DTKEzjmW0AA_B3M.jpg',
            'https://cache.desktopnexus.com/thumbseg/840/840395-bigthumbnail.jpg',
            'https://images.wallpaperscraft.com/image/beauty_city_dubai_lights_evening_water_58630_2560x1600.jpg',
            'https://wallup.net/wp-content/uploads/2019/09/1031730-city-beauty-urban-sunlight-748x503.jpg'
        ]
    },
    {
        id: 4,
        user: {
            name: 'Alex Sanda',
            avatar: 'https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Bearded_Man-17-512.png'
        },
        saved: true,
        location: 'Washington',
        temperature: 26,
        title: 'Greece 4',
        description: 'Greece Description 4',
        rating: 4.9,
        reviews: 7657,
        preview: 'https://cache.desktopnexus.com/thumbseg/840/840395-bigthumbnail.jpg',
        images: [
            'https://pbs.twimg.com/media/DTKEzjmW0AA_B3M.jpg',
            'https://cache.desktopnexus.com/thumbseg/840/840395-bigthumbnail.jpg',
            'https://images.wallpaperscraft.com/image/beauty_city_dubai_lights_evening_water_58630_2560x1600.jpg',
            'https://wallup.net/wp-content/uploads/2019/09/1031730-city-beauty-urban-sunlight-748x503.jpg'
        ]
    }
];

const styles = StyleSheet.create({
    flex: {
        flex: 0,
        backgroundColor: theme.colors.white
    },
    column: {
        flexDirection: 'column'
    },
    row: {
        flexDirection: 'row'
    },
    header: {
        backgroundColor: theme.colors.white,
        paddingHorizontal: theme.sizes.padding,
        paddingTop: theme.sizes.padding * 1.33,
        paddingBottom: theme.sizes.padding * 0.66,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    articles: {
        
    },
    destinations: {
        flex: 1,
        justifyContent: 'space-between'
    },
    destination: {
        width: width - (theme.sizes.padding * 2),
        borderRadius: theme.sizes.border,
        paddingHorizontal: theme.sizes.padding,
        paddingVertical: theme.sizes.padding * 0.66,
        marginHorizontal: theme.sizes.margin,
        height: width * 0.6
    },
    destinationInfo: {
        position: 'absolute',
        borderRadius: theme.sizes.border,
        paddingHorizontal: theme.sizes.padding,
        paddingVertical: theme.sizes.padding / 2,
        bottom: -theme.sizes.padding,
        left: theme.sizes.padding,
        right: theme.sizes.padding,
        backgroundColor: 'white'
    },
    recommended: {
        // paddingHorizontal: 36,
        paddingVertical: theme.sizes.padding
    },
    avatar: {
        width: theme.sizes.padding,
        height: theme.sizes.padding,
        borderRadius: theme.sizes.border * 1.12
    },
    rating: {
        fontSize: theme.sizes.font * 2,
        color: theme.colors.white,
        fontWeight: 'bold'   
    },
    shadow: {
        shadowColor: theme.colors.black,
        shadowOffset: {
            width: 0,
            height: 6
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 5
    },
    dots: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: theme.colors.gray,
        marginHorizontal: 6,
        borderColor: 'transparent',
        borderWidth: theme.sizes.border * 0.15
    },
    activeDot: {
        width: 12.5,
        height: 12.5,
        borderRadius: theme.sizes.border * 0.39,
        borderColor: theme.colors.active
    },
    recommendation: {
        width: (width - (theme.sizes.padding * 2)) / 2,
        // height: 'auto',
        marginHorizontal: theme.sizes.padding * 0.22,
        backgroundColor: 'white',
        borderTopRightRadius: theme.sizes.border,
        borderTopLeftRadius: theme.sizes.border
    },
    recommendationImage: {
        width: (width - (theme.sizes.padding * 2)) / 2,
        height: (width - (theme.sizes.padding * 2)) / 2,
        padding: theme.sizes.padding * 0.44,
        borderTopLeftRadius: theme.sizes.border,
        borderTopRightRadius: theme.sizes.border
    },
    recommendedList: {
        // paddingHorizontal: 36
    },
    recommendationHeader: {
        overflow: 'hidden',
        borderTopRightRadius: theme.sizes.border,
        borderTopLeftRadius: theme.sizes.border
    },
    recommendationTemp: {
        fontSize: theme.sizes.font * 1.25,
        color: theme.colors.white
    },
    recommendationOptions: {
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: theme.sizes.padding / 2,
        position: 'absolute',
        top: 0,
        right: 0,
        flex: 1,
        width: '100%'
    },
    recommendedHeader: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingHorizontal: theme.sizes.padding,
        marginVertical: theme.sizes.margin * 0.66
    }
});
 
class List extends React.Component {
    static navigationOptions = {
        header: (
            <View
                style={[
                    styles.row,
                    styles.header
                ]}
            >
                <View>
                    <Text
                        style={{
                            color: theme.colors.caption
                        }}
                    >Search for place</Text>
                    <Text style={{
                        fontSize: theme.sizes.font * 2
                    }}>Destination</Text>
                </View>
                <View>
                    <Image
                        style={styles.avatar}
                        source={{
                            uri: 'https://png.pngtree.com/png-vector/20190704/ourmid/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg'
                        }}
                    >

                    </Image>
                </View>
            </View>
        )
    };

    scrollX = new Animated.Value(0);

    renderDots() {
        const { destinations } = this.props;
        const dotPosition = Animated.divide(this.scrollX, width);

        return (
            <View
                style={[
                    styles.flex,
                    styles.row,
                    {
                        justifyContent: 'center',
                        marginTop: theme.sizes.margin * 2
                    }
                ]}
            >
                {
                    destinations.map((item, index) => {
                        const width = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [0, 2.5, 0],
                            extrapolate: 'clamp'
                        });
                        return (
                            <Animated.View
                                key={`step-${item.id}`}
                                style={[
                                    styles.dots,
                                    styles.activeDot,
                                    {
                                        borderWidth: width
                                    }
                                ]}
                            >
        
                            </Animated.View>
                        )
                    })
                }
            </View>
        )
    }

    renderDestination = (item) => {
        const { navigation } = this.props;
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Article', { article: item })}
            >
                <ImageBackground
                    imageStyle={{
                        borderRadius: 12
                    }}
                    style={[
                        styles.flex,
                        styles.destination,
                        styles.shadow
                    ]}
                    source={{uri: item.preview}}
                >
                    <View style={[
                        styles.row,
                        {
                            justifyContent: 'space-between'
                        }
                    ]}>
                        <View style={{
                            flex: 0
                        }}>
                            <Image
                                source={{uri: item.user.avatar}}
                                style={styles.avatar}
                            />
                        </View>
                        <View style={[
                            styles.column,
                            {
                                paddingHorizontal: theme.sizes.padding / 2,
                                flex: 2
                            }
                        ]}>
                            <Text style={{
                                color: theme.colors.white,
                                fontWeight: 'bold'
                            }}>{item.user.name}</Text>
                            <Text style={{
                                color: theme.colors.white
                            }}>
                                <Octicons
                                    name='location'
                                    size={theme.sizes.font * 0.8}
                                    color={theme.colors.white}
                                />
                                <Text>{item.location}</Text>
                            </Text>
                        </View>
                        <View style={{
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                            flex: 0
                        }}>
                            <Text style={[
                                styles.rating
                            ]}>{item.rating}</Text>
                        </View>
                    </View>
                    <View
                        style={[
                            styles.column,
                            styles.destinationInfo,
                            styles.shadow
                        ]}
                    >   
                        <Text
                            style={{
                                fontSize: theme.sizes.font * 1.25,
                                fontWeight: '500',
                                paddingBottom: 8
                            }}
                        >{item.title}</Text>
                        <View
                            style={[
                                styles.row,
                                {
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-end'
                                }
                            ]}
                        >
                            <Text
                                style={{
                                    color: theme.colors.caption
                                }}
                            >
                                {item.description.split('').slice(0, 50)} ...
                            </Text>
                            <FontAwesome
                                name='chevron-right'
                                size={theme.sizes.font * 0.8}
                                color={theme.colors.caption}
                            />
                        </View>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    renderDestinations = () => {
        return (
            <View style={[
                styles.flex,
                styles.column,
                styles.destinations,
            ]}>
                <FlatList
                    style={{
                        overflow: 'visible',
                        height: 290
                    }}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    snapToAlignment='center'
                    data={this.props.destinations}
                    keyExtractor={(item, index) => `${item.id}`}
                    renderItem={({ item }) => this.renderDestination(item)}
                    decelerationRate={0}
                    onScroll={Animated.event([
                        {
                            nativeEvent: {
                                contentOffset: {
                                    x: this.scrollX
                                }
                            }
                        }
                    ])}
                />
                {this.renderDots()}
            </View>
        )
    }

    renderRecommendation = (item, index) => {
        const isLastItem = index === this.props.destinations.length - 1;
        return (
            <View
                style={[
                    styles.flex,
                    styles.column,
                    styles.recommendation,
                    index === 0 ? { marginLeft: theme.sizes.margin } : null,
                    isLastItem ? { marginRight: theme.sizes.margin / 2 } : null
                ]}
            >
                <View
                    style={[
                        styles.flex,
                        styles.recommendationHeader
                    ]}
                >
                    <Image
                        style={[
                            styles.recommendationImage
                        ]}
                        source={{uri: item.preview}}
                    />
                    <View
                        style={[
                            styles.row,
                            styles.recommendationOptions
                        ]}
                    >
                        <Text
                            style={styles.recommendationTemp}
                        >{item.temperature} °C</Text>
                        <FontAwesome
                            name={item.saved ? 'bookmark' : 'bookmark-o'}
                            size={theme.sizes.font * 1.5}
                            color={theme.colors.white}
                        />
                        {/* <Text
                            style={{
                                color: theme.colors.white
                            }}
                        >|...|</Text> */}
                    </View>
                </View>
                <View
                    style={[
                        styles.flex,
                        styles.column,
                        styles.shadow,
                        {
                            justifyContent: 'space-evenly',
                            padding: theme.sizes.padding / 2
                        }
                    ]}
                >
                    <Text
                        style={{
                            fontSize: theme.sizes.font * 1.25,
                            fontWeight: '500',
                            paddingBottom: theme.sizes.padding / 4.5
                        }}
                    >{item.title}</Text>
                    <Text   
                        style={{
                            color: theme.colors.caption
                        }}
                    >
                        {item.location}
                    </Text>
                    <View
                        style={[
                            styles.row,
                            {
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginTop: theme.sizes.margin
                            }
                        ]}
                    >
                        {this.renderRatings(item.rating)}
                        <Text
                            style={{
                                color: theme.colors.active
                            }}
                        >
                            {item.rating}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }

    renderRecommended = () => {
        return (
            <View style={[
                styles.flex,
                styles.column,
                styles.recommended
            ]}>
                <View
                    style={[
                        styles.row,
                        styles.recommendedHeader
                    ]}
                >
                    <Text 
                        style={{
                            fontSize: theme.sizes.font * 1.5
                        }}
                    >Recommended</Text>
                    <TouchableOpacity activeOpacity={0.5} style={{
                        color: theme.colors.caption
                    }}>
                        <Text>
                            More
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={[
                    styles.flex,
                    styles.column,
                    styles.recommendedList,
                ]}>
                    <FlatList
                        style={{
                            overflow: 'visible',
                            height: 290
                        }}
                        horizontal
                        pagingEnabled
                        scrollEnabled
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={16}
                        snapToAlignment='center'
                        data={this.props.destinations}
                        keyExtractor={(item, index) => `${item.id}`}
                        renderItem={({ item, index }) => this.renderRecommendation(item, index)}
                    />
                </View>
            </View>
        )
    }

    renderRatings(rating) {
        const stars = new Array(5).fill(0);
        return (
            stars.map((value, index) => {
                const activeStar = (index + 1) <= rating;
                return (
                    <FontAwesome
                        name='star'
                        key={`star-${index}`}
                        size={theme.sizes.font}
                        color={theme.colors[activeStar ? 'active' : 'gray']}
                    />
                )
            })
        );
    }

    render() {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false} 
                contentContainerStyle={[
                    {
                        paddingBottom: theme.sizes.padding,
                        backgroundColor: 'white'
                    }
                ]}
            >
                {this.renderDestinations()}
                {this.renderRecommended()}
            </ScrollView>
        )
    }
}

List.defaultProps = {
    destinations: mocks
};

export default List;