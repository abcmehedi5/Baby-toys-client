import Swal from "sweetalert2";
const useErrorAlert = (error) => {
  Swal.fire({
    title: `${error}`,
    icon: "error",
  });
};
const useSuccessAlert = (success) => {
  Swal.fire({
    title: `${success}`,
    icon: "success",
  });
};

export { useErrorAlert, useSuccessAlert };
