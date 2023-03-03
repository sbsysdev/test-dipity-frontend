/* react */
import { memo } from 'react';
/* layouts */
import { TableLayout } from '@shared/layouts';
/* components */
import { Hint } from '@shared/components';
import { ClientActions } from '../ClientActions';
/* styles */
import listStyles from './ClientList.module.scss';

function ClientList() {
    return (
        <main className={listStyles.List}>
            <TableLayout
                header={{
                    columns: [
                        {
                            children: 'Name',
                        },
                        {
                            children: 'Lastname',
                        },
                        {
                            children: 'Email',
                        },
                        {
                            children: 'Address',
                            span: 2,
                        },
                        {
                            children: 'Phone number',
                        },
                        {
                            children: 'Created at',
                        },
                        {
                            children: 'Actions',
                            span: 2,
                        },
                    ],
                }}
                body={[
                    ...[...Array(200)].map(() => ({
                        columns: [
                            {
                                children: <Hint hint="Steven" hasDots />,
                            },
                            {
                                children: <Hint hint="Bustillo" hasDots />,
                            },
                            {
                                children: <Hint hint="mail@mail.com" hasDots />,
                            },
                            {
                                children: (
                                    <Hint
                                        hint="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, corrupti."
                                        hasDots
                                    />
                                ),
                            },
                            {
                                children: <Hint hint="+50588088080" hasDots />,
                            },
                            {
                                children: <Hint hint={new Date().toISOString()} hasDots />,
                            },
                            {
                                children: <ClientActions userId="qwerty" />,
                            },
                        ],
                    })),
                ]}
            />
        </main>
    );
}

export default memo(ClientList);
