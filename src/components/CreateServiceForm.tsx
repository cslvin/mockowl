// src/components/CreateServiceForm.tsx
'use client';

import { useState, useEffect } from 'react';
import { Button, TextField, MenuItem, Grid, IconButton } from '@mui/material';
import { Upload as UploadIcon } from '@mui/icons-material';

interface CreateServiceFormProps {
    onCreate: (service: { serviceName: string; networkCallType: string; usageDataType: string }) => void;
    initialData?: { serviceName: string; networkCallType: string; usageDataType: string };
}

const protocols = [
    'HTTP',
    'HTTPS',
    'WebSocket',
    'gRPC',
    'MQTT',
];

const usageDataTypes = [
    'JSON',
    'XML',
    'CSV',
    'Binary',
];

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

    const handleCreate = () => {
        onCreate({ serviceName, networkCallType, usageDataType });
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} style={{ textAlign: 'right' }}>
                <IconButton color="primary">
                    <UploadIcon />
                </IconButton>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Name"
                    value={serviceName}
                    onChange={(e) => setServiceName(e.target.value)}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    select
                    label="Choose Protocol"
                    value={networkCallType}
                    onChange={(e) => setNetworkCallType(e.target.value)}
                    fullWidth
                >
                    {protocols.map((protocol) => (
                        <MenuItem key={protocol} value={protocol}>
                            {protocol}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    select
                    label="Choose Usage Data Type"
                    value={usageDataType}
                    onChange={(e) => setUsageDataType(e.target.value)}
                    fullWidth
                >
                    {usageDataTypes.map((type) => (
                        <MenuItem key={type} value={type}>
                            {type}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={handleCreate}>
                    {initialData ? 'Save Changes' : 'Create'}
                </Button>
            </Grid>
        </Grid>
    );
};

export default CreateServiceForm;
