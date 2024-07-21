'use client';

import { useState } from 'react';
import { Grid, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import CreateServiceForm from './CreateServiceForm';
import ServiceList from './ServiceList';
import ServiceDetails from './ServiceDetails';

interface Service {
    serviceName: string;
    networkCallType: string;
    usageDataType: string;
    isRunning: boolean;
}

const Dashboard = () => {
    const [services, setServices] = useState<Service[]>([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [isEditMode, setIsEditMode] = useState(false);

    const handleCreateService = (newService: { serviceName: string; networkCallType: string; usageDataType: string }) => {
        if (isEditMode && selectedService) {
            setServices(services.map(service =>
                service.serviceName === selectedService.serviceName ? { ...service, ...newService } : service
            ));
        } else {
            setServices([...services, { ...newService, isRunning: false }]);
        }
        setIsDialogOpen(false);
        setIsEditMode(false);
    };

    const handleStartService = (serviceName: string) => {
        setServices(services.map(service => service.serviceName === serviceName ? { ...service, isRunning: true } : service));
    };

    const handleStopService = (serviceName: string) => {
        setServices(services.map(service => service.serviceName === serviceName ? { ...service, isRunning: false } : service));
    };

    const handleShowServiceDetails = (serviceName: string) => {
        const service = services.find(service => service.serviceName === serviceName);
        if (service) {
            setSelectedService(service);
        }
    };

    const handleCloseServiceDetails = () => {
        setSelectedService(null);
    };

    const handleDeleteService = (serviceName: string) => {
        setServices(services.filter(service => service.serviceName !== serviceName));
        handleCloseServiceDetails();
    };

    const handleEditService = () => {
        setIsEditMode(true);
        setIsDialogOpen(true);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} style={{ marginTop: '16px' }}> {/* Add margin here */}
                <Typography variant="h4" gutterBottom className="font-sans">
                    Dashboard
                </Typography>
                <Button variant="contained" color="primary" onClick={() => setIsDialogOpen(true)} className="font-sans">
                    CREATE SERVICE
                </Button>
            </Grid>
            <Grid item xs={12}>
                <ServiceList
                    services={services}
                    onStart={handleStartService}
                    onStop={handleStopService}
                    onShowDetails={handleShowServiceDetails}
                />
            </Grid>
            <Dialog open={isDialogOpen} onClose={() => { setIsDialogOpen(false); setIsEditMode(false); }}>
                <DialogTitle className="font-sans">{isEditMode ? 'Edit Service' : 'Create a New Service'}</DialogTitle>
                <DialogContent>
                    <CreateServiceForm
                        onCreate={handleCreateService}
                        initialData={isEditMode && selectedService ? selectedService : undefined}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => { setIsDialogOpen(false); setIsEditMode(false); }} color="primary" className="font-sans">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
            {selectedService && (
                <Dialog open={Boolean(selectedService)} onClose={handleCloseServiceDetails}>
                    <DialogTitle className="font-sans">Service Details</DialogTitle>
                    <DialogContent>
                        <ServiceDetails
                            service={selectedService}
                            onDelete={handleDeleteService}
                            onEdit={handleEditService}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseServiceDetails} color="primary" className="font-sans">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
        </Grid>
    );
};

export default Dashboard;
