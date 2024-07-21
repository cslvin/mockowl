'use client';

import { Grid, Paper, Typography, IconButton } from '@mui/material';
import { PlayArrow as PlayArrowIcon, Stop as StopIcon } from '@mui/icons-material';

interface Service {
    serviceName: string;
    networkCallType: string;
    usageDataType: string;
    isRunning: boolean;
}

interface ServiceListProps {
    services: Service[];
    onStart: (serviceName: string) => void;
    onStop: (serviceName: string) => void;
    onShowDetails: (serviceName: string) => void;
}

const ServiceList = ({ services, onStart, onStop, onShowDetails }: ServiceListProps) => {
    return (
        <Grid container spacing={2}>
            {services.map((service, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Paper style={{ padding: 16 }} onClick={() => onShowDetails(service.serviceName)}>
                        <Typography variant="h6" className="font-sans">{service.serviceName}</Typography>
                        <Typography variant="body2" className="font-sans">Type: {service.networkCallType}</Typography>
                        <Typography variant="body2" className="font-sans">Usage Data Type: {service.usageDataType}</Typography>
                        <Typography variant="body2" className="font-sans">Status: {service.isRunning ? 'Running' : 'Stopped'}</Typography>
                        <Grid container spacing={1} style={{ marginTop: 8 }}>
                            <Grid item>
                                {service.isRunning ? (
                                    <IconButton onClick={(e) => { e.stopPropagation(); onStop(service.serviceName); }} color="secondary">
                                        <StopIcon />
                                    </IconButton>
                                ) : (
                                    <IconButton onClick={(e) => { e.stopPropagation(); onStart(service.serviceName); }} color="primary">
                                        <PlayArrowIcon />
                                    </IconButton>
                                )}
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
};

export default ServiceList;
