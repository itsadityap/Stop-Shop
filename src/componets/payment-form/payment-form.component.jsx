import { CardElement } from "@stripe/react-stripe-js";
import { Fragment } from "react";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";

const PaymentForm = () => {
    return (
        <Fragment>
            <CardElement />
            <Button>Pay Now</Button>
        </Fragment>
    )
}

export default PaymentForm