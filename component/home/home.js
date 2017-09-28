import React from 'react';
import {
    StyleSheet, 
    Text,
    View,
    Button,
    Image,
    TouchableOpacity, // 本组件用于封装视图，使其可以正确响应触摸操作。
    TextInput,
    ScrollView,
} from 'react-native';

// navigator
import { StackNavigator } from 'react-navigation';

// 引入组件 Cell
import CommonMineCell from '../mine/commonMineCell';

// 引入组件 中间部分
import BdBanner from './common/bdBanner';

// 引入组件 特别推荐
import ShopCenter from './common/scrollCenter';

// 引入组件 Cell
import ShopCell from './common/shopCell';

// 引入组件 swiper
import Swiper from 'react-native-swiper';

// 引入组件 出行专卖
import ShopSell from './common/shopSell';


// 导入外部的json数据 分类轮播
import Home_Banner from '../../date/sliderDate.json';

// 导入外部的json数据 出行专卖
import ShopSellDate from '../../date/shopSellHome.json';

// 导入外部的json数据 底部商品数据
import ShopListDate from '../../date/shopListBottom.json';


// 获取设备宽高
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

export default class Home extends React.Component {
    // 导航配置
    static navigationOptions = ({ navigation }) => {
        const { navigate } = navigation;
        return {
            /**
            * header: null 不要顶部，navigation 的顶部一般是那种左边返回中间文字右边团的那种
            */
            // header: null,
            headerLeft: (
                <TouchableOpacity 
                    onPress={() => navigate('Localtion', {
                            name: 'Localtion', // 跳转模块名称
                            mode: 'modal', // 定义跳转的动画
                        })
                    }
                >
                    <Text style={styles.localtionTop}>陕西</Text>
                </TouchableOpacity>
            ),
            headerRight: (
                <View style={styles.headerRight}>
                    <TextInput 
                        placeholder="输入想要搜索的"
                        style={styles.topInputStyle}
                    />
                    {/*右侧*/}
                    <View style={styles.rightNavStyle}>
                        <TouchableOpacity>
                            <Image
                                style={styles.iconOneStyle}
                                source={{uri: 'http://haonan.zhushou.la/image/icon_homepage_message.png'}}>
                            </Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                style={styles.iconTwoStyle}
                                source={{uri: 'http://haonan.zhushou.la/image/icon_homepage_scan.png'}}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                </View>
            ),
            tabBarIcon: ({ focused, tintColor }) => (
                <Image
                    resizeMode="contain"
                    style={styles.iconBtn}
                    source={!focused ? {uri: 'http://haonan.zhushou.la/image/icon_tabbar_homepage.png'} : {uri: 'http://haonan.zhushou.la/image/icon_tabbar_homepage_selected.png'}} 
                />
            ),
            tabBarLabel: '首页',
            headerMode: 'float',
        };
    };

    // home 主体内容
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>

                <View style={styles.container}>

                    <Swiper
                        style={styles.swiper}
                        height={200}
                        horizontal={true}
                        paginationStyle={{bottom: 10}}
                        autoplay={true}
                        autoplayTimeout={2}
                        showsButtons={true}
                        dot={<View style={styles.bannerDote} />}//未选中的圆点样式
                        activeDot={<View style={styles.bannerDoteActive} />}//选中的圆点样式
                    >
                        <Image source={{uri: 'http://haonan.zhushou.la/image/img/img_01.png'}} style={styles.imgSlide}/>
                        <Image source={{uri: 'https://m.tuniucdn.com/fb2/t1/G1/M00/71/65/Cii-U1iYKFCIX4FYAAEvipw6fvsAAHTvQHjNzQAAS-i693_w640_h480_c1_t0_w640_h320_c1_t0.jpg'}} style={styles.imgSlide}/>
                        <Image source={{uri: 'https://m.tuniucdn.com/fb2/t1/G1/M00/BE/46/Cii-U1jaCI-IGxhyAAbk0mmxGN8AAJK0wD9TJUABuTq306_w640_h480_c1_t0_w640_h320_c1_t0.jpg'}} style={styles.imgSlide}/>
                        <Image source={{uri: 'http://haonan.zhushou.la/image/img/img_02.png'}} style={styles.imgSlide}/>
                    </Swiper>

                    <Swiper
                        style={styles.swiper}
                        height={200}
                        horizontal={true}
                        paginationStyle={{bottom: 8}}
                        showsButtons={false}
                        dot={<View style={styles.swiperDote} />} //未选中的圆点样式
                        activeDot={<View style={styles.swiperDoteActive} />} //选中的圆点样式
                    >
                        {/*--  第一个轮播  --*/}
                        <View style={styles.imgSlideTab}>

                            {this.renderSlideOne()}

                        </View>

                        {/*--  第2个轮播  --*/}
                        <View style={styles.imgSlideTab}>

                            {this.renderSlideTwo()}

                        </View>
                    </Swiper>

                    {/*--  当季热卖  --*/}
                    <BdBanner />


                    {/*** 出行专卖店 ***/}
                    <View style={styles.saleSpecial}>
                        <Image 
                            resizeMode="contain"
                            style={styles.commonTitlteStyle}
                            source={{uri: 'http://haonan.zhushou.la/image/title3.png'}} 
                        />
                        <View style={styles.listRow}>

                            {this.renderSellSpecial()}

                        </View>
                        <View style={styles.listRow}>

                            {this.renderSellSpecialTwo()}
                            
                        </View>
                    </View>

                    {/*** 商品 ***/}
                    <View style={styles.saleSpecial}>
                        <Image 
                            resizeMode="contain"
                            style={{width: width*1,height: 40,marginTop: 8, marginBottom: -3}}
                            source={{uri: 'http://haonan.zhushou.la/image/title1.png'}} 
                        />
                    </View>

                    {/*** 购物中心 ***/}
                    <View>
                        <CommonMineCell 
                            title="美女中心"
                            rightTitle="全部美女"
                            leftImg="http://haonan.zhushou.la/image/rm.png"
                        />
                    </View>

                    {/*** 横向滚动美女 ***/}
                    <ShopCenter 
                        
                    />

                    {/*** 商品中心 ***/}
                    <View style={{marginTop: 14}}>
                        <CommonMineCell 
                            title="美女商品"
                            rightTitle="全部美女"
                            leftImg="http://haonan.zhushou.la/image/xckc.png"
                        />
                    </View>
                    
                    {this.renderBottomShop()}

                    {/**
                    * Detail：在StackNavigator中注册的页面，需要一一对应，才能跳转到相应的页面
                    * title：在跳转的页面可以通过this.props.navigation.state.params.title获取到这个参数。当然这个参数可以随便填写，都可以通过this.props.navigation.state.params.xxx获取。
                    */}
                    <TouchableOpacity
                        onPress={() => navigate('Detail', {
                                name: 'Detail', // 跳转模块名称
                                title:'我是跳转过去下个页面要带的参数', // 跳转参数
                                mode: 'card' // 定义跳转的动画
                            })
                        }
                    >
                        <View style={styles.moreBtn}>
                            <Text style={styles.moreBtnText}>立即抢购</Text>
                        </View>
                    </TouchableOpacity>
                    
                </View>
            </ScrollView>
        );
    }

    // 分类轮播第一个
    renderSlideOne(){
        // 组件数组
        var itemArr = [];
        // 拿到对应的数据
        var dataArr = Home_Banner.data;

        for(var i = 0;i < 8; i++){
            // 取出单独的数据
            var itemData = dataArr[i];
            // 创建组件,装入数组
            itemArr.push(
                <View style={styles.imgSlideTabStyle}>
                    <Image 
                        style={styles.imgSlideTabPicStyle} 
                        source={{uri: itemData.pic}} 
                        resizeMode='contain' 
                    />
                    <Text style={styles.imgSlideTabTextStyle}>{itemData.title}</Text>
                </View>
            );
        }
        // 返回组件数组
        return itemArr;
    }

    // 分类轮播第2个
    renderSlideTwo(){
        var itemArrTwo = [];
        var dataArrTwo = Home_Banner.data;

        for(var i = 8;i < dataArrTwo.length; i++){
            var itemData = dataArrTwo[i];
            itemArrTwo.push(
                <View style={styles.imgSlideTabStyle}>
                    <Image 
                        style={styles.imgSlideTabPicStyle} 
                        source={{uri: itemData.pic}} 
                        resizeMode='contain' 
                    />
                    <Text style={styles.imgSlideTabTextStyle}>{itemData.title}</Text>
                </View>
            );
        }
        return itemArrTwo;
    }

    // 出行专卖 前三个
    renderSellSpecial(){
        var itemArrSell = [];
        var dateSell = ShopSellDate.data;

        for(var i = 0;i < 3; i++){
            var itemData = dateSell[i];
            itemArrSell.push(
                <ShopSell 
                    nextClick={() => {this.endClick(itemData.id)}}
                    title={itemData.title}
                    subTitle={itemData.subTitle}
                    pic={itemData.pic}
                />
            );
        }
        return itemArrSell;
    }

    // 出行专卖 后三个
    renderSellSpecialTwo(){
        var itemArrSellT = [];
        var dateSell = ShopSellDate.data;

        for(var i = 3;i < dateSell.length; i++){
            var itemData = dateSell[i];
            itemArrSellT.push(
                <ShopSell 
                    nextClick={() => {this.endClick(itemData.id)}}
                    title={itemData.title}
                    subTitle={itemData.subTitle}
                    pic={itemData.pic}
                />
            );
        }
        return itemArrSellT;
    }

    // 控制跳转
    endClick(num) {
        const { navigate } = this.props.navigation;
        navigate('Detail', {id: num})
    }

    // 底部商品数据
    renderBottomShop(){
        var itemArrShop = [];
        var dateSell = ShopListDate.data;

        for(var i = 0;i < dateSell.length; i++){
            var itemData = dateSell[i];
            itemArrShop.push(
                <ShopCell 
                    title={itemData.title}
                    subTitle={itemData.subTitle}
                    price={itemData.price}
                    leftImg={itemData.pic}
                />
            );
        }
        return itemArrShop;
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },

    headerRight: {
        flex: 1,
        flexDirection: 'row',
        // 垂直居中
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    iconOneStyle: { // 导航条右侧图片
        height: 26,
        width: 26,
        marginRight: 6,
        marginLeft: 6
    },

    iconTwoStyle: {
        height: 26,
        width: 26,
        marginRight: 10
    },

    topInputStyle: {
        width: width * 0.69,
        height: 34,
        backgroundColor: '#fff',
        borderRadius: 15,
        border: null,
        paddingLeft: 15,
        fontSize: 15
    },

    rightNavStyle: {
        height: 34,
        flexDirection: 'row',
        marginTop: 5
    },

    headerTouch: {
        height: 30
    },

    headerBtn: {
        flex: 1,
        width: 30,
        height: 30,
        marginRight: 15
    },

    iconBtn: {
        width: 25,
        height: 25,
    },

    headerImg: {
        borderRadius: 15,
    },
    saleSpecial: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 15
    },
    meinvCenter: {
        flex: 1,backgroundColor: '#fff',flexDirection: 'row',justifyContent: 'space-around'
    },
    meiTabPic: {
        width: width * 0.26, height: 104, borderRadius: 20, borderTopLeftRadius: 80
    },
    textTabMei: {
        fontSize: 15, color: '#333', fontWeight: '600',marginBottom: 15,
    },
    imgSlide:{
        width: width * 1, height: 200,
    },
    swiperGrad: {
        width: width * 1, height: 200, backgroundColor: '#fff',marginBottom: 10,
    },
    imgSlide: {
        width: width * 1, height: 200,
    },
    imgSlideTab: {
        width: width * 1, height: 200,
        backgroundColor: '#fff', flexDirection: 'row', flexWrap: 'wrap'
    },
    imgSlideTabStyle: {
        width: width * 0.25,height: 85,
        alignItems: 'center', 
    },
    imgSlideTabPicStyle: {
        width: 50, height: 50,
        textAlign: 'center', marginTop: 10,
    },
    imgSlideTabTextStyle: {
        width: width * 0.25, textAlign: 'center', marginTop: 3, color: '#333', fontWeight: '600', fontSize: 13
    },
    moreBtn: {
        width: width * 0.9, marginLeft: width * 0.05, height: 50, backgroundColor: 'rgba(255, 96, 0, 1)',
        overflow:' hidden',marginTop: 25,marginBottom: 15,
    },
    moreBtnText: {
        textAlign: 'center', lineHeight:45, fontSize: 16, color: '#fff',fontWeight: '600',
    },
    listRow: {
        flex:1 ,backgroundColor:'#fff',flexDirection: 'row'
    },
    swiperDote: {
        backgroundColor: 'rgba(0,0,0,.2)',
        width: 30,
        height: 5,
        marginLeft: 8,
        marginRight: 8,
        marginTop: 9,
        marginBottom: 6,
    },
    swiperDoteActive: {
        backgroundColor: 'rgba(255, 96, 0, 1)',
        width: 30,
        height: 5,
        marginLeft: 8,
        marginRight: 8,
        marginTop: 9,
        marginBottom: 6,
    },
    bannerDote: {
        backgroundColor: 'rgba(0,0,0,.2)',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 8,
        marginRight: 8,
        marginTop: 9,
        marginBottom: 9,
    },
    bannerDoteActive: {
        backgroundColor: 'rgba(255, 96, 0, 1)',
        width: 8,
        height: 8,
        borderRadius: 5,
        marginLeft: 8,
        marginRight: 8,
        marginTop: 9,
        marginBottom: 9,
    },
    localtionTop: {
        width: 46,color: '#fff',fontSize: 16, marginRight: 14, textAlign: 'center'
    },
    commonTitlteStyle: {
        width: width*1,height: 40,marginTop: 8, marginBottom: 7
    }
});
