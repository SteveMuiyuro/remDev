import toast from "react-hot-toast";

export const displayError = (error:unknown) => {

        let message;

        if(error instanceof Error)
          message = error.message;

        else if(typeof error === "string")
          message = error

        else
          message = "Unexpected error has occured"

        toast.error(message)

}
