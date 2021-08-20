import React, {useState} from 'react';
import { StyleSheet, Text, View,Button, SafeAreaView, FlatList,Image, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';


export default function HomeScreen({navigation}) {

    //const [data, setData] = useState(products);
    const [isLoading, setLoading] = useState(false);
{
    /**
     * React.useEffect(() => {
        setTimeout(()=>{
            setLoading(true);
            setData(products);
        },1000);
        return () => {};
        }, []);
     */
}

    const chooseFlat = [
        {
            id: 'cong-nghe',
            name: 'Công nghệ',
            img: 'http://thietkeweb180.com/wp-content/uploads/2019/11/V%C3%AC-sao-n%C3%AAn-d%C3%B9ng-Icon-cho-web-b%C3%A1n-h%C3%A0ng-min.jpg',

        },
        {
            id: 'tieu-dung',
            name: 'Tiêu dùng',
            img: 'https://cdn.brvn.vn/news/480px/2015/8382_Consumer.jpg',

        },
        {
            id: 'do-choi',
            name: 'Đồ chơi',
            img: 'http://thietkeweb180.com/wp-content/uploads/2019/11/V%C3%AC-sao-n%C3%AAn-d%C3%B9ng-Icon-cho-web-b%C3%A1n-h%C3%A0ng-min.jpg',

        },
        {
            id: 'quan-ao',
            name: 'Quần Áo',
            img: 'https://pacificcross.com.vn/wp-content/uploads/2020/11/b2ap3_large_cach-gap-quan-ao-di-du-lich.jpg',

        },
    ];
    const products = [
        {
            id: 'guong-giay',
            name: 'Gương giấy',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxIoW865-QRwsmk2KmQL1Y0whX80_43qfodkkBCQDypRzNoJcURJE2aUX4_uM&usqp=CAc',
            price: 80000,
            made: 'Trung Quốc',
            avaiable: false,
            color: ['Trắng',
                'Đen',
                'Vàng']
                ,
            type: 'Tiêu dùng'
        },
        {
            id: 'the-nho-256',
            name: 'Thẻ nhớ 256 GB',
            url: 'https://tuanphong.vn/pictures/thumb/2017/10/1508154361-618-the-nho-256gb-microsdxc-sandisk-ultra-a1-2017-420x420.jpg',
            price: 100000,
            made: 'Trung Quốc',
            avaiable: false,
            color: {
            },
            type: 'Điện tử'
        },
        {
            id: 'xiao-mi-note-10-pro',
            name: 'XiaoMi Note 10',
            url: 'https://cdn.tgdd.vn/Products/Images/42/222758/xiaomi-redmi-note-10-xanh-duong-1-org.jpg',
            price: 8000000,
            made: 'Trung Quốc',
            avaiable: false,
            color: ['Đỏ, Xanh, Vàng'],
            type: 'Điện tử'
        },
        {
            id: 'the-nho-500',
            name: 'Thẻ nhớ 500 GB',
            url: 'https://tuanphong.vn/pictures/thumb/2017/10/1508154361-618-the-nho-256gb-microsdxc-sandisk-ultra-a1-2017-420x420.jpg',
            price: 200000,
            made: 'Trung Quốc',
            avaiable: false,
            color: {
            },
            type: 'Điện tử'
        },
        {
            id: 'xiao-mi-note-11-pro',
            name: 'XiaoMi Note 11',
            url: 'https://cdn.tgdd.vn/Products/Images/42/222758/xiaomi-redmi-note-10-xanh-duong-1-org.jpg',
            price: 9000000,
            made: 'Trung Quốc',
            avaiable: false,
            color: ['Đỏ, Xanh, Vàng'],
            type: 'Điện tử'
            },

    ];

    const renderItem = ({item, index}) => (
        <View style={styles.item}>
            <View style={styles.wrappIMG}>
                <Image source={{uri: item.url}} style={styles.image} resizeMode={'cover'} />
            </View>
            <View style={styles.wrappInfo}>
                <View>
                    <Text style={styles.name}>{item.name}</Text>
                </View>
                
            </View>
            <View style={styles.wrapAvaiable}>
                <View>
                    <Text style={styles.price}>Giá: {item.price}</Text>
                </View>
                <View>
                {item.avaiable ?
                    (<Text style={styles.textAvaiable}>Có sẵn</Text>):
                     (<Text style={styles.textAvaiable}>Hàng đợi</Text>)} 
                </View>                   
            </View>
        </View>
      );

      const chooseItem = ({item, index}) => (
        <View style={styles.wrapChooseItem}>
            <View style={styles.imgChoose}>
                <Image source={{uri: item.img}} style={styles.imageChoose} resizeMode={'cover'} />
            </View>
            <Text style={styles.nameChoose}>{item.name}</Text>
        </View>
      );
    
    return (
        <SafeAreaView style={{flex: 1}}>
        {isLoading ? (<ActivityIndicator />) : (
            <>
                <View style={styles.wrapChooseProduct}>
                    <Text style={styles.textTitle}>Hàng hiện có</Text>
                    <TouchableOpacity >
                        <FlatList data={chooseFlat}
                        renderItem={chooseItem}
                        keyExtractor={(item, index) => item}
                        horizontal={true}
                        style={styles.flatListChoose}

                        />
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.listProduct}>
                   <FlatList
                        data={products}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index}
                        numColumns={2}
                    /> 
                </View>
            </>
        )}
            
        </SafeAreaView>   
    )
}

  
