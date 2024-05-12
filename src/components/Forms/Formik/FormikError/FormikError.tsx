import { BsExclamationCircle } from "react-icons/bs";

interface IProps {
  error: string | undefined;
  touched: boolean | undefined;
};

const FormikError = ({ error, touched }: IProps): JSX.Element | null => {
    if (error && touched) {
        return (
            <div className="flex items-center mt-0.5">
                <BsExclamationCircle className="text-red-400" />
                <span className="ml-2 text-red-400 text-sm">{error}</span>
            </div>
        )
    }

    return null;
}

export default FormikError