/* react */
import { useMemo } from 'react';
/* props */
import { CreateClientFormSchema, CreateClientFormValues } from './CreateClient.props';
/* hooks */
import { useForm } from 'react-hook-form';
/* components */
import { FieldProps, Hint, Icon } from '@shared/components';
/* utils */
import { yupResolver } from '@hookform/resolvers/yup';

export function useCreateClient() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateClientFormValues>({
        resolver: yupResolver(CreateClientFormSchema),
    });

    /* actions */
    const handleCreateClient = handleSubmit((data) => {
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

    const createClientFields: FieldProps[] = [
        nameFieldProps,
        lastNameFieldProps,
        emailFieldProps,
        addressFieldProps,
        phoneFieldProps,
    ];

    return { handleCreateClient, createClientFields };
}
