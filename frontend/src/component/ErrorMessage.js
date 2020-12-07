export default function ErrorMessage(errors) {

          switch (errors.errors) {
            case "required":
                return "This filed is required"
            // case "minLength":
            //         return "Minimun 3 letters"
              default:
                  return ""
          }  
}
