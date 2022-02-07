import {View, Text, SafeAreaView, StyleSheet, Button} from 'react-native';
import {CardField, useStripe} from '@stripe/stripe-react-native';
import React, {useEffect, useState} from 'react';
import {Header} from '../../components/header';
import {color} from '../../theme';

const Strip = ({navigation}) => {
  useEffect(() => {
    initializePaymentSheet();
  }, []);
  const {initPaymentSheet, presentPaymentSheet} = useStripe();
  const [loading, setLoading] = useState(true);
  const onLeft = () => {
    navigation.goBack();
  };
  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`${API_URL}/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const {paymentIntent, ephemeralKey, customer} = await response.json();

    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  const initializePaymentSheet = async () => {
    const {paymentIntent, ephemeralKey, customer, publishableKey} =
      await fetchPaymentSheetParams();

    const {error} = await initPaymentSheet({
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      allowsDelayedPaymentMethods: true,
    });
    if (!error) {
      setLoading(true);
    }
  };
  const openPaymentSheet = async () => {
    const {error} = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'Your order is confirmed!');
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView
        style={{flex: 1, backgroundColor: color.appGreen}}
        forceInset={{bottom: 'never'}}>
        <View style={{flex: 1, backgroundColor: color.tonerGrey}}>
          <Header onLeftPress={onLeft}>
            <Text>Payment</Text>
          </Header>
          {/* 
          <CardField
            postalCodeEnabled={false}
            placeholder={{
              number: '4242 4242 4242 4242',
            }}
            cardStyle={{
              backgroundColor: '#FFFFFF',
              textColor: '#000000',
            }}
            style={{
              width: '100%',
              height: 50,
              marginVertical: 30,
            }}
            onCardChange={cardDetails => {
              console.log('cardDetails', cardDetails);
            }}
            onFocus={focusedField => {
              console.log('focusField', focusedField);
            }}
          /> */}
          <Button
            variant="primary"
            disabled={!loading}
            title="Checkout"
            onPress={openPaymentSheet}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Strip;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.tonerGrey,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
