import Swal from "sweetalert2";

export const Alert = (icon , title , time = 6000)=>{
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: time,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: icon,
        title: title
    });
}
export const Confirm = async (title , text , icon , confirmText , cancelText)=>{
    return await Swal.fire({
        title: title,
        text: text,
        icon: icon,
        showCancelButton: true,
        cancelButtonColor: "#3fc1c9",
        confirmButtonColor: "#d33",
        confirmButtonText: confirmText,
        cancelButtonText: cancelText
    })
}