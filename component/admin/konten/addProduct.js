import { Modal } from "antd";
import { Button, Checkbox, Form, Input } from 'antd';

const ModalAdd = ({ isModalVisible, handleOk, handleCancel }) => {
    return <Modal title="Tambah Data" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form.Item
            label="Nama"
            name="nama"
            rules={[
                {
                    required: true,
                    message: 'Masukan nama !',
                },
            ]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            label="Email"
            name="email"
            rules={[
                {
                    required: true,
                    message: 'Masukan email !',
                },
            ]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            label="NIK"
            name="nik"
            rules={[
                {
                    required: true,
                    message: 'Masukan NIK !',
                },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Password"
            name="password"
            rules={[
                {
                    required: true,
                    message: 'Masukan password!',
                },
            ]}
        >
            <Input.Password />
        </Form.Item>
        <Form.Item
            label="Konfirmasi Password"
            name="password"
            rules={[
                {
                    required: true,
                    message: 'Masukan konfirmasi password!',
                },
            ]}
        >
            <Input.Password />
        </Form.Item>
    </Modal>
}

export default ModalAdd;
