export default function ErrorMessage(errors) {

          switch (errors.errors) {
            case "required":
                return "This filed is required"
            case "minLength":
                    return "Too short. Use at least 6 characters"
              default:
                  return ""
          }  
}
