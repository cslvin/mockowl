// src/components/ServiceDetails.tsx
'use client';

import { Typography, Button, Grid } from '@mui/material';

interface Service {
    serviceName: string;
    networkCallType: string;
    isRunning: boolean;
    usageDataType: string;
}

interface ServiceDetailsProps {
    service: Service;
    onDelete: (serviceName: string) => void;
    onEdit: () => void;
}

const ServiceDetails = ({ service, onDelete, onEdit }: ServiceDetailsProps) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6">{service.serviceName}</Typography>
                <Typography variant="body2">Type: {service.networkCallType}</Typography>
                <Typography variant="body2">Usage Data Type: {service.usageDataType}</Typography>
                <Typography variant="body2">Status: {service.isRunning ? 'Running' : 'Stopped'}</Typography>
            </Grid>
            {/* Add more metrics or configuration details here */}
            <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={onEdit}>
                    Edit Service
                </Button>
                <Button variant="contained" color="error" onClick={() => onDelete(service.serviceName)}>
                    Delete Service
                </Button>
            </Grid>
        </Grid>
    );
};

export default ServiceDetails;
