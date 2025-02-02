import {FC} from 'react'
import {CheckCircledIcon} from '@radix-ui/react-icons'


interface FormSuccessProps {
    message?: string
}


export const FormSuccess: FC<FormSuccessProps> = ({message}) => {
    if(!message) return null
    return (
        <div className="bg-green-500/20 p-3 rounded-2xl flex items-center gap-x-2 text-sm text-green-500">
            <CheckCircledIcon className={'h-4 w-4'}/>
            <span>{message}</span>
        </div>
    )
}