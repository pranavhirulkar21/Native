import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>RamRam Bhaiyo!!! _/\_</Text> */}

    <View style={styles.productInfo}>
      <Text style={styles.productName}>New Deer Upholstered Barrel Chair</Text>
      <View style={styles.ownerInfo}>
          <Image source={require('./challenge-profile-image.jpg')} style={styles.ownerPhoto}/>
          <Text style={styles.ownerName}>by Sand and Sable</Text>
          </View>
    </View>
    <View style={styles.ratingInfo}>
          <View style={styles.ratingStars}>
            <View style={styles.brightStars} />
            <View style={styles.brightStars} />
            <View style={styles.brightStars} />
            <View style={styles.faintStars} />
            <View style={styles.faintStars} />
          </View>
          <Text style={styles.ratingText}>3/5 <Text style={styles.underline}>(See 24 reviews)</Text></Text>
        </View>

        <ScrollView horizontal style={styles.ScrollImages}>
          <Image source={require('./challenge image (1).webp')} style={styles.productImage} />
          <Image source={require('./challenge image (2).webp')} style={styles.productImage} />
          <Image source={require('./challenge image (3).webp')} style={styles.productImage} />
          <Image source={require('./challenge image (4).webp')} style={styles.productImage} />
        </ScrollView>

        <View style={styles.priceInfo}>
          <Text style={styles.price}>$ 450.55</Text>
          <View style={styles.deliveryInfo}>
            <Text style={styles.deliveryDate}>Get it by 3rd March *Standard</Text>
            <Text style={styles.deliveryLocation}>
            Deliver to <Text style={styles.underline}>Lewes19958</Text>
            </Text>
          </View>
        </View>


        <View style={styles.actionButtons}>
          <View style={styles.quantity}>
          <View style={[styles.quantityWholeButton, { width: '25%' }]}>
            <TouchableOpacity style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>1</Text>
            <TouchableOpacity style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
            </View>
          <TouchableOpacity style={[styles.addToCartButton, { width: '75%' }]}>
            <Text style={styles.addToCartButtonText}>ADD TO CART</Text>
          </TouchableOpacity>
          </View>
          <TouchableOpacity style={[styles.buyNowButton, { width: '100%' }]}>
            <Text style={styles.buyNowButtonText}>BUY NOW</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.productDescription}>
          <Text style={styles.productDescriptionHeading}>Product Description</Text>
          <View>
            <Text style={styles.productDescriptionText}>It is a long established fact that a reader will be 
            distracted by the readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has</Text>
          </View>
        </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'Outfit',
  },
  productInfo: {
    padding: 10,
    marginTop: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    paddingTop: 20,
  },
  ownerInfo:{
    flexDirection: 'row',
  },
  ownerPhoto: {
    width: 25,
    height: 25,
    borderRadius: 16,
    marginRight: 8,
  },
  ownerName: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 2,
    fontStyle: 'italic',
  },
  ratingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    paddingLeft: 10,
  },
  ratingStars: {
    flexDirection: 'row',
    marginRight: 5,
  },
  brightStars: {
    width: 18,
    height: 18,
    backgroundColor: '#ffd700',
    marginRight: 3,
  },
  faintStars: {
    width: 18,
    height: 18,
    backgroundColor: '#ccc',
    marginRight: 3,
  },
  ratingText: {
    fontSize: 12,
  },
  ScrollImages: {
    paddingTop: 20,
    paddingLeft:10 ,
  },
  productImage: {
    width: 180,
    height: 180,
    marginRight: 8,
    borderWidth: 2,
    borderColor: '#cfb00c',
    borderRadius: 12,
  },
  priceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    paddingTop: 10,
  },
  price: {
    fontSize: 35,
    fontWeight: 'bold',
    marginRight: 16,
    paddingLeft: 10, 
  },
  deliveryInfo: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  deliveryDate: {
    fontSize: 12,
    marginRight: 8,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  deliveryLocation: {
    fontSize: 11,
    textDecorationLine: 'underline',
    paddingRight: 10,
  },
  underline: {
    textDecorationLine: 'underline',
  },
  actionButtons: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 8,
    marginTop: 15,
    padding: 10,
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    paddingLeft: 10,
  },
  quantityWholeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    marginRight: 8,
    paddingLeft: 2,
    padding: 8,
  },
  quantityButton: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ccc',
    borderRadius: 1,
    marginRight: 3,
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 8,
  },
  addToCartButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
    alignItems: 'center',
    paddingRight: 10,
  },
  addToCartButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  buyNowButton: {
    backgroundColor: '#ffd700',
    borderWidth: 1,
    borderColor: '',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  buyNowButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  productDescription: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    margin: 10,
  },
  productDescriptionHeading: {
    backgroundColor: '#ccc',
    fontSize: 24,
    padding: 10,
  },
  productDescriptionText: {
    fontSize: 21,
    paddingLeft: 10,
  },
});
