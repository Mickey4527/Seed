import { Button } from "@nextui-org/react";

function SubmitButton(text: string, func: any, loading: boolean, loadingText: string, className: string) {
    return (
        <Button
        className={`bg-forest-green-600 :hover:bg-forest-green-700 text-white ${className}`}
        type="submit"
        onClick={func}
        isLoading={loading}
        >
        {loading
            ? loadingText
            : text}
        </Button>
    );
}

export default SubmitButton;