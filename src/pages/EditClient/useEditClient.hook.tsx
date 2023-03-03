/* react */
import { useMemo } from 'react';
/* context */
import { useClientsContext } from '../Clients/Clients.context';
/* props */
import { EditClientFormSchema, EditClientFormValues } from './EditClient.props';
/* hooks */
import { useForm } from 'react-hook-form';
/* components */
import { FieldProps, Hint } from '@shared/components';
/* utils */
import { yupResolver } from '@hookform/resolvers/yup';

export function useEditClient() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<EditClientFormValues>({
        resolver: yupResolver(EditClientFormSchema),
    });

    const { selectedClientToEdit } = useClientsContext();
    console.log(selectedClientToEdit);

    /* actions */
    const handleEditClient = handleSubmit((data) => {
        console.log(data);
    });

    /* props */
    const nameFieldProps = useMemo(
        (): FieldProps => ({
            inputContent: (props) => <input placeholder="Name" {...register('name')} {...props} />,
            hintContent: <Hint error={errors.name?.message} />,
        }),
        [register, errors.name?.message]
    );

    const lastNameFieldProps = useMemo(
        (): FieldProps => ({
            inputContent: (props) => (
                <input placeholder="Last name" {...register('lastname')} {...props} />
            ),
            hintContent: <Hint error={errors.lastname?.message} />,
        }),
        [register, errors.lastname?.message]
    );

    const emailFieldProps = useMemo(
        (): FieldProps => ({
            inputContent: (props) => (
                <input placeholder="Email" type="email" {...register('email')} {...props} />
            ),
            hintContent: <Hint error={errors.email?.message} />,
        }),
        [register, errors.email?.message]
    );

    const addressFieldProps = useMemo(
        (): FieldProps => ({
            inputContent: (props) => (
                <textarea placeholder="Address" {...register('address')} {...props} />
            ),
            hintContent: <Hint error={errors.address?.message} />,
        }),
        [register, errors.address?.message]
    );

    const phoneFieldProps = useMemo(
        (): FieldProps => ({
            inputContent: (props) => (
                <input placeholder="Phone number" {...register('phone')} {...props} />
            ),
            hintContent: <Hint error={errors.phone?.message} />,
        }),
        [register, errors.phone?.message]
    );

    const editClientFields: FieldProps[] = [
        nameFieldProps,
        lastNameFieldProps,
        emailFieldProps,
        addressFieldProps,
        phoneFieldProps,
    ];

    return { handleEditClient, editClientFields };
}
