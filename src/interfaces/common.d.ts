import { CreateResponse, BaseRecord, UpdateResponse } from "@pankod/refine-core"
import { FieldValues } from "@pankod/refine-react-hook-form"
import { ReactNode, FormEventHandler } from "react"

export interface CustomButtonProps {
    type?: string,
    title: string,
    backgroundColor: string,
    color: string,
    fullWidth?: boolean,
    icon?: ReactNode,
    disabled?: boolean,
    handleClick?: () => void
}

export interface ProfileProps {
    type: string,
    name: string,
    avatar: string,
    email: string,
    properties: Array<any> | undefined
}

export interface PropertyProps {
    _id: string,
    title: string,
    description: string,
    location: string,
    price: string,
    photo: string,
    creator: string
}

export interface FormProps {
    type: string,
    register: any,
    onFinish: (values: FieldValues) => Promise<void | CreateResponse<BaseRecord> | UpdateResponse<BaseRecord>>,
    formLoading: boolean,
    handleSubmit: FormEventHandler<HTMLFormElement> | any;
    handleImageChange: (file) => void,
    onFinishHandler: (data: FieldValues) => Promise<void> | void,
    propertyImage: { name: string, url: string },
}
