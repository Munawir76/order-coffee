import Router from 'next/router'
import { Button } from 'antd'

export default function ButtonBack() {
    return (
        <Button type='button' onClick={() => Router.back()}>Kembali</Button>
    )
}
