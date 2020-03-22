import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    Animated,
    Image,
    Dimensions,
    ScrollView 
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

import * as theme from '../theme';

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    column: {
        flexDirection: 'column'
    },
    row: {
        flexDirection: 'row'
    },
    header: {
        backgroundColor: 'transparent',
        paddingHorizontal: theme.sizes.padding,
        paddingTop: theme.sizes.padding * 0.66,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: theme.sizes.padding * 0.66
    },
    back: {
        width: theme.sizes.base * 3,
        height: theme.sizes.base * 3,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    content: {
        backgroundColor: theme.colors.white,
        borderTopLeftRadius: theme.sizes.border * 2.5,
        borderTopRightRadius: theme.sizes.border * 2.5
    },
    contentHeader: {
        padding: theme.sizes.padding
    },
    avatar: {
        position: 'absolute',
        top: -theme.sizes.margin,
        right: theme.sizes.margin,
        width: theme.sizes.padding * 2,
        height: theme.sizes.padding * 2,
        borderRadius: theme.sizes.border
    },
    shadow: {
        shadowColor: theme.colors.black,
        shadowOffset: {
            width: 0,
            height: 6
        },
        shadowOpacity: 0.05,
        shadowRadius: 10
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
    title: {
        fontSize: theme.sizes.font * 2,
        fontWeight: 'bold'
    },
    description: {
        fontSize: theme.sizes.font * 1.2,
        color: theme.colors.caption,
        lineHeight: theme.sizes.font * 2
    }
});

export default class Article extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: (
                <View
                    style={[
                        styles.row,
                        styles.header
                    ]}
                >
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.back}
                    >
                        <FontAwesome 
                            name='chevron-left'
                            color={theme.colors.white}
                            size={theme.sizes.font * 1}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialIcons 
                            name='more-horiz'
                            color={theme.colors.white}
                            size={theme.sizes.font * 1.5}
                        />
                    </TouchableOpacity>
                </View>
            ),
            headerTransparent: true
        }
    };

    scrollX = new Animated.Value(0);

    renderDots = () => {
        const { navigation } = this.props;
        const article = navigation.getParam('article');
        const dotPosition = Animated.divide(this.scrollX, width);
        return (
            <View
                style={[
                    styles.flex,
                    styles.row,
                    {
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: -theme.sizes.margin * 8
                    }
                ]}
            >
                {
                    article.images.map((item, index) => {
                        const opacity = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [0.5, 1, 0.5],
                            extrapolate: 'clamp'
                        });
                        return (
                            <Animated.View
                                key={`step-${item}-${index}`}
                                style={[
                                    styles.dots,
                                    {
                                        opacity
                                    }
                                ]}
                            />
                        )
                    })
                }
            </View>
        )
    }

    renderRatings = rating => {
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
                        style={{
                            marginRight: theme.sizes.margin / 4
                        }}
                    />
                )
            })
        );
    }

    render() {
        const { navigation } = this.props;
        const article = navigation.getParam('article');
        return (
            <View
                style={[
                    styles.flex,
                    {
                        backgroundColor: theme.colors.white,
                        marginTop: theme.sizes.padding * 0.66
                    }
                ]}
            >
                <View
                    style={[
                        styles.flex,
                        {
                            justifyContent: 'flex-end',
                            marginBottom: -theme.sizes.margin
                        }
                    ]}
                >
                    <ScrollView 
                        horizontal={true}
                        style={{
                            overflow: 'visible'
                        }}
                        pagingEnabled
                        scrollEnabled
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={16}
                        snapToAlignment='center'
                        onScroll={Animated.event([
                            {
                                nativeEvent: {
                                    contentOffset: {
                                        x: this.scrollX
                                    }
                                }
                            }
                        ])}
                    >
                        {
                            article.images.map((img, index) => <Image 
                                key={`${img}-${index}`} 
                                source={{
                                    uri: img
                                }}
                                style={{
                                    width,
                                    height: width
                                }} 
                                resizeMode='cover'
                            />)
                        }
                    </ScrollView>
                    {this.renderDots()}
                </View>
                <View style={[
                    styles.flex,
                    styles.content
                ]}>
                    <View
                        style={[
                            styles.flex,
                            styles.contentHeader
                        ]}
                    >
                        <Image
                            style={[
                                styles.avatar,
                                styles.shadow
                            ]}
                            source={{
                                uri: article.user.avatar
                            }}
                        />
                        <Text
                            style={styles.title}
                        >{article.title}</Text>
                        <View
                            style={[
                                styles.row,
                                {
                                    alignItems: 'center',
                                    marginVertical: theme.sizes.margin / 2
                                }
                            ]}
                        >
                            {this.renderRatings(article.rating)}
                            <Text
                                style={{
                                    color: theme.colors.active
                                }}
                            >
                                {article.rating}
                            </Text>
                            <Text
                                style={{
                                    marginLeft: theme.sizes.margin / 3,
                                    color: theme.colors.caption
                                }}
                            >
                                ( {article.reviews}
                                {' '}
                                reviews )
                            </Text>
                        </View>
                        <Text
                            style={styles.description}
                        >
                            {article.description.split('').slice(0, 200)} ...
                            <Text
                                style={{
                                    color: theme.colors.active
                                }}
                            >Read more</Text>
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}