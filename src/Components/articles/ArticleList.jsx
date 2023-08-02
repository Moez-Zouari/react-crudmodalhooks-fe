import React, { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Box } from '@mui/material';


const ArticleList = ({ products }) => {
    const columns = useMemo(
        () => [
            {
                accessorKey: 'imageart',
                header: 'Image',
                size: 80,
                Cell: ({ cell }) => (
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                        }}
                    >
                        <img
                            alt=""
                            height={100}
                            src={cell.getValue()}
                            loading="lazy"
                            style={{ borderRadius: '20%' }}
                        />
                    </Box>),
            },
            {
                accessorKey: 'reference',
                header: 'Référence',
                size: 100,
            },
            {
                accessorKey: 'designation',
                header: 'Désignation',
                size: 150,
            },

            {
                accessorKey: 'marque', //normal accessorKey
                header: 'Marque',
                size: 80,
            },
            {
                accessorKey: 'prix',
                header: 'Prix',
                size: 80,
            },
            {
                accessorKey: 'qtestock',
                header: 'Quantité',
                size: 80,
            },
        ],
        [],
    );
    return (

        < div >
            <MaterialReactTable columns={columns} data={products} />;
        </ div>
    )
}

export default ArticleList
