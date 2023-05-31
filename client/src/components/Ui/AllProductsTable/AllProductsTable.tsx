import { Link } from 'react-router-dom';
import { Table } from '../../Common/Table/Table/Table';
import { TableBody } from '../../Common/Table/TableBody/TableBody';
import { TableHeader } from '../../Common/Table/TableHeader/TableHeader';
import { AllProductsTableProps, productInfo } from './AllProductsTable.type';
import { ColorCircle } from '../../Common/ColorCircle/ColorCircle';
import { ButtonIcon } from '../../Common/ButtonIcon/ButtonIcon';
import { All_SIZES } from '../../../constants';

const AllProductsTable = ({ data }: AllProductsTableProps): JSX.Element => {
    const renderColors = (colors: productInfo[]): JSX.Element[] => {
        return colors.map(({ color }) => <ColorCircle color={color} key={color}/>);
    };

    const getSizes = (sizes: productInfo[]): string => {
        const sizeData = sizes.map(({ size }) => size);

        const newData = sizeData.reduce((acc: string[], sizes) => {
            Object.keys(sizes).map(size => acc.push(' ' + size));
            return acc;
        }, [])
            .sort((a, b) => All_SIZES.indexOf(a) - All_SIZES.indexOf(b));

        return [...new Set(newData)].toString();
    };

    const handleDeleteProduct = (): void => {
        console.log('delete');
    };

    return (
        <Table>
            <TableHeader>
                <tr>
                    <th>Id</th>
                    <th>Image-link</th>
                    <th>Name</th>
                    <th>Product type</th>
                    <th>Price</th>
                    <th>Gender</th>
                    <th>Collection</th>
                    <th>Color</th>
                    <th>Size</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </TableHeader>
            <TableBody>
                {data.map(({ id, gender, productType, img, title, price, colors, collection }) => (
                    <tr key={id}>
                        <td>{id}</td>
                        <td><Link style={{
                            display: 'inline-block',
                            minWidth: '3rem'
                        }} to={`/${gender}/${productType}/${id}`}><img src={img} width='40' height='40'/></Link></td>
                        <td>{title}</td>
                        <td>{productType}</td>
                        <td>{price}</td>
                        <td>{gender}</td>
                        <td>{collection}</td>
                        <td>
                            <div className='d-flex'>{renderColors(colors)}</div>
                        </td>
                        <td style={{
                            whiteSpace: 'nowrap'
                        }}>{getSizes(colors)}</td>
                        <td><ButtonIcon imgUrl={'/img/svg/edit.svg'} link={`${id}`}/></td>
                        <td><ButtonIcon imgUrl={'/img/svg/delete.svg'} onClick={handleDeleteProduct}/></td>
                    </tr>
                ))}
            </TableBody>
        </Table>
    );
};

export { AllProductsTable };
