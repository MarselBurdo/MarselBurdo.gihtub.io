import {
    List,
    DatagridConfigurable,
    TextField,
    Pagination,
    TopToolbar,
    SelectColumnsButton,
    CreateButton,
    ExportButton,
    SearchInput,
} from "react-admin";

const ListActions = () => (
    <TopToolbar>
        <SelectColumnsButton/>
        <CreateButton/>
        <ExportButton/>
    </TopToolbar>
);

const paymentsFilters = [
    <SearchInput source="q" alwaysOn/>,
];

export function PaymentsList() {
    return <List resource={'payments'} pagination={<Pagination rowsPerPageOptions={[10, 25, 50, 100]}/>} perPage={10}
                 actions={<ListActions/>} filters={paymentsFilters}>

        <DatagridConfigurable>

            <TextField source="name"/>
            <TextField source="amount"/>
            <TextField source="status"/>
            <TextField source="description"/>
        </DatagridConfigurable>

    </List>
}