import { ExclamationTriangleIcon } from '@radix-ui/react-icons'


interface FormErrorProps {
    message?: string
}


export const FormError: React.FC<FormErrorProps> = ({ message }) => {
    if (!message) return null
    return (
        <div className="bg-red-500/20 p-3 rounded-2xl flex items-center gap-x-2 text-sm text-red-500">
            <ExclamationTriangleIcon className={'h-4 w-4'} />
            <span>{message}</span>
        </div>
    )
}