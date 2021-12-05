import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

function ToastNotification(props) {
    const { title, type, iconName, color } = props
    const notify = (message) => {
        // toast("Default Notification !");
        console.log(message);
        toast.success("Success Notification !", {
            position: toast.POSITION.TOP_RIGHT
        });

        // toast.error("Error Notification !", {
        //     position: toast.POSITION.TOP_LEFT
        // });

        // toast.warn("Warning Notification !", {
        //     position: toast.POSITION.BOTTOM_LEFT
        // });

        // toast.info("Info Notification !", {
        //     position: toast.POSITION.BOTTOM_CENTER
        // });

        // toast("Custom Style Notification with css class!", {
        //     position: toast.POSITION.BOTTOM_RIGHT,
        //     className: 'foo-bar'
        // });
    };
    return <div>
        <button onClick={() => notify('success')} type={type === 'submit' ? 'submit' : 'button'} className={`btn btn-${color} flex-center mr-1`}>
            <ion-icon name={iconName}></ion-icon>
            {title}</button>
        <ToastContainer
            position="top-right"
            autoClose={3000}
        />
    </div>
}

export default ToastNotification