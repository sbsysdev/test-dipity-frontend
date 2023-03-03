/* react */
import { memo } from 'react';
/* layouts */
import { TableLayout } from '@shared/layouts';
/* components */
import { Hint } from '@shared/components';
import { ProductActions } from '../ProductActions';
/* styles */
import listStyles from './ProductList.module.scss';

function ProductList() {
    return (
        <main className={listStyles.List}>
            <TableLayout
                header={{
                    columns: [
                        {
                            children: 'Product name',
                        },
                        {
                            children: 'Category',
                        },
                        {
                            children: 'Expires',
                        },
                        {
                            children: 'In stok',
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
                                children: <Hint hint="Product name" hasDots />,
                            },
                            {
                                children: <Hint hint="Electronics" hasDots />,
                            },
                            {
                                children: <Hint hint={new Date().toISOString()} hasDots />,
                            },
                            {
                                children: <Hint hint="500" hasDots />,
                            },
                            {
                                children: <ProductActions productId="qwerty" />,
                            },
                        ],
                    })),
                ]}
            />
        </main>
    );
}

export default memo(ProductList);
