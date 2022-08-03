import Router from 'next/router'
import { Button } from 'antd'

export default function ButtonBack() {
    return (
        <Button type='primary' onClick={() => Router.back()}>Kembali</Button>
    )
}
