import { Modal } from "antd";



export const CustomModal= ({
  width = 600,
  centered = true,
  isOpenModal,
  onCancel,
  children,
  destroyOnClose,
  title,
  className = "",
  zIndex = 1000,
  confirmLoading = false,
  footer = null,
}) => (
  <Modal
    confirmLoading={confirmLoading}
    centered={centered}
    className={className}
    open={isOpenModal}
    onCancel={onCancel}
    footer={footer}
    width={width}
    destroyOnClose={destroyOnClose}
    title={title}
    zIndex={zIndex}
  >
    {children}
  </Modal>
);

export default CustomModal;
