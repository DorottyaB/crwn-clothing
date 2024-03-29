import { FormEvent, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useDispatch, useSelector } from 'react-redux';

import { selectCartTotal } from '../../selectors/cart/cartSelector';
import { selectCurrentUser } from '../../selectors/user/userSelector';

import { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { PaymentFormContainer, FormContainer, PaymentButton } from './payment-form.styles';
import { clearCart } from '../../features/cart/cartSlice';
import { StripeCardElement } from '@stripe/stripe-js';

const ifValidCardElement = (card: StripeCardElement | null): card is StripeCardElement =>
  card !== null;

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState({
    isCompleted: false,
    message: 'Payment Successful!',
  });

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then(res => {
      return res.json();
    });

    const clientSecret = response.paymentIntent.client_secret;

    const cardDetails = elements.getElement(CardElement);

    if (!ifValidCardElement(cardDetails)) return;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest',
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert('Please provide valid information');
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        setPaymentCompleted(prevValue => {
          return {
            ...prevValue,
            isCompleted: true,
          };
        });
        dispatch(clearCart());
      }
    }
  };

  return (
    <PaymentFormContainer>
      {paymentCompleted.isCompleted ? (
        <h3>{paymentCompleted.message}</h3>
      ) : (
        <FormContainer onSubmit={paymentHandler}>
          <h2>Credit Card Payment: </h2>
          <CardElement />
          <PaymentButton isLoading={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}>
            Pay now
          </PaymentButton>
        </FormContainer>
      )}
    </PaymentFormContainer>
  );
};

export default PaymentForm;
