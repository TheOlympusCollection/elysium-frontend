import {
    Button,
    Checkbox,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
} from '@nextui-org/react';

interface LoginModalProps {
    isOpen: boolean;
    onOpen: () => void;
    onOpenChange: () => void;
}

const LoginModal = ({ isOpen, onOpen, onOpenChange }: LoginModalProps) => {
    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            backdrop='blur'
            className='md:bg-transparent md:backdrop-blur-3xl md:border-2 md:border-foreground-100'
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className='flex flex-col gap-1'>
                            Log in
                        </ModalHeader>
                        <ModalBody>
                            <Input
                                autoFocus
                                label='Username'
                                placeholder='Enter your username'
                                variant='bordered'
                            />
                            <Input
                                label='Password'
                                placeholder='Enter your password'
                                type='password'
                                variant='bordered'
                            />
                            <div className='flex py-2 px-1 justify-between'>
                                <Checkbox
                                    classNames={{
                                        label: 'text-small',
                                    }}
                                >
                                    Remember me
                                </Checkbox>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color='danger'
                                variant='flat'
                                onPress={onClose}
                            >
                                Close
                            </Button>
                            <Button
                                color='primary'
                                variant='flat'
                                onPress={onClose}
                            >
                                Log in
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default LoginModal;
