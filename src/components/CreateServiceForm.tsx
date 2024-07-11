// src/components/CreateServiceForm.tsx
import { useState, useEffect } from 'react';
import { TextField, Button, MenuItem, Grid } from '@mui/material';

interface CreateServiceFormProps {
    onCreate: (newService: { serviceName: string; networkCallType: string; usageDataType: string }) => void;
    initialData?: { serviceName: string; networkCallType: string; usageDataType: string };
}

const CreateServiceForm = ({ onCreate, initialData }: CreateServiceFormProps) => {
    const [serviceName, setServiceName] = useState(initialData?.serviceName || '');
    const [networkCallType, setNetworkCallType] = useState(initialData?.networkCallType || '');
    const [usageDataType, setUsageDataType] = useState(initialData?.usageDataType || '');

    useEffect(() => {
        if (initialData) {
            setServiceName(initialData.serviceName);
            setNetworkCallType(initialData.networkCallType);
            setUsageDataType(initialData.usageDataType);
        }
    }, [initialData]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onCreate({ serviceName, networkCallType, usageDataType });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="Service Name"
                        value={serviceName}
                        onChange={(e) => setServiceName(e.target.value)}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        select
                        label="Network Call Type"
                        value={networkCallType}
                        onChange={(e) => setNetworkCallType(e.target.value)}
                        fullWidth
                        required
                    >
                        <MenuItem value="HTTP">HTTP</MenuItem>
                        <MenuItem value="TCP/IP">TCP/IP</MenuItem>
                        <MenuItem value="UDP">UDP</MenuItem>
                        <MenuItem value="WebSocket">WebSocket</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        select
                        label="Usage Data Type"
                        value={usageDataType}
                        onChange={(e) => setUsageDataType(e.target.value)}
                        fullWidth
                        required
                    >
                        <MenuItem value="JSON">JSON</MenuItem>
                        <MenuItem value="XML">XML</MenuItem>
                        <MenuItem value="PlainText">PlainText</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                        {initialData ? 'Update Service' : 'Create Service'}
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default CreateServiceForm;
