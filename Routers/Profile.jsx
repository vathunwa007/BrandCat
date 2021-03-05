import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Navbar from '../Components/Navbar'
import { Form, Input, Button, Select, Upload, Modal } from 'antd';
import { LoadingOutlined, PlusOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { uid } from 'uid';
import Axios from '../util/Api'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
const { TextArea } = Input;

const Profile = () => {
    const [from] = Form.useForm();
    const [imageUrl, setImageUrl] = useState(null);
    const [imageUrl2, setImageUrl2] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [loading, setLoading] = useState("");
    const [state, setState] = useState({
        uid: uid(10),
        namecat: null,
        detailcat: null,
        agecat: null,
        type: null,
        nickname: null,
        latlong: null,
        telephone: null,
        imgcat: null,
        imguser: null
    }
    )
    function getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    function beforeUpload(file) {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }
    const handleChange = info => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => {
                setImageUrl({ raw: info.file.originFileObj, img: imageUrl });
                setLoading(false);

            });
        }
    };
    const handleChange2 = info => {
        console.log('info :>> ', info);
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl2 => {
                setImageUrl2({ raw: info.file.originFileObj, img: imageUrl2 });
                setLoading(false);

            });
        }
    };
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ display: "block", textAlign: "center", margin: "0 auto" }}>Upload</div>
        </div>
    );
    const Onfromchange = (value) => {
        let key = Object.keys(value);
        state[key[0]] = value[key[0]];
        setState({ ...state });
        from.setFieldsValue({ ...state });
    }
    const onFinish = (f) => {
        console.log('onFinish :>> ', f);
        CreateProfile();
    }
    const onFinishFailed = (f) => {
        console.log('onFinishFailed :>> ', f);
    }
    const CreateProfile = async () => {

        if (imageUrl) {
            var formData = new FormData();
            formData.append('files', imageUrl.raw);
            await Axios.post("/upload", formData).then(({ data }) => {
                console.log('data :>> ', data);
                state.imgcat = data[0];
                setState({ ...state });
            }).catch((eror) => {
                console.error(eror);
            })
        }
        if (imageUrl2) {
            var formData = new FormData();
            formData.append('files', imageUrl2.raw);
            await Axios.post("/upload", formData).then(({ data }) => {
                console.log('data :>> ', data);
                state.imguser = data[0];
                setState({ ...state });
            }).catch((eror) => {
                console.error(eror);
            })
        }
        await Axios.post("/brandcats", {
            ...state, uid: uid(10)
        }).then(({ data }) => {
            console.log('data', data);
        }).catch((eror) => {
            console.error(eror)
        })
    }
    async function get_latlong({ latLng }) {
        console.log(latLng.lat(), latLng.lng());
        let datalatlong = {lat:latLng.lat(), lng:latLng.lng()}
        console.log('datalatlong :>> ', datalatlong);
        state.latlong = datalatlong;
        await setState(state);
        await from.setFieldsValue({ ...state,latlong:(latLng.lat()+","+latLng.lng()) });

    }
    const Map = compose(
        withProps({
            googleMapURL: "https://maps.google.com/maps/api/js?key=AIzaSyArK9veHmyKP3QdYMPW1381JzFHqUwDg9U&language=th&region=TH&libraries=geometry,drawing,places",
            loadingElement: <div style={{ height: `100%` }} />,
            containerElement: <div style={{ height: `400px` }} />,
            mapElement: <div style={{ height: `100%` }} />
        }),
        withScriptjs,
        withGoogleMap
    )(props => (
        <GoogleMap defaultZoom={8} defaultCenter={props.latlong ? { lat: props.latlong.lat, lng: props.latlong.lng } : { lat: 13.742380765167903, lng: 100.48935217285157 }}>
            {props.isMarkerShown && (
                <Marker draggable={props.draggable ? true : false} onDragEnd={props.get_latlong} defaultPosition={props.latlong ? { lat: props.latlong.lat, lng: props.latlong.lng } : { lat: 13.742380765167903, lng: 100.48935217285157 }} />
            )}
        </GoogleMap>
    ));

    return (
        <div>
            <Head>
                <title>ออกแบบให้น้องแมวสุดรัก</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container mt-5 mb-5">
                <div className="card">
                    <Navbar />
                    {/* <div style={{ height: "80vh" }} id="bgsection2"></div> */}
                    <section className="section" style={{ position: "relative", width: "100%", top: "15%", }} id="bgsection2">
                        <Form layout={"vertical"} form={from} initialValues={state} onValuesChange={Onfromchange} onFinish={onFinish} onFinishFailed={onFinishFailed}>
                            <div className="row gx-5 my-2 mx-2 info-panel">
                                <div className="col-md-4 px-5 card cardnew colw">
                                    <Upload
                                        name="files"
                                        listType="picture-card"
                                        className="avatar-uploader"
                                        showUploadList={false}
                                        // action="http://localhost:1337/upload"
                                        beforeUpload={beforeUpload}
                                        onChange={handleChange}

                                    >
                                        {imageUrl ? <img src={imageUrl.img} alt="avatar" style={{ display: "block", textAlign: "center", margin: "0 auto", height: "100px", width: "100px" }} /> : uploadButton}
                                    </Upload>
                                    <Form.Item rules={[{ required: true, }]} label="ชื่อแมว" name="namecat">
                                        <Input placeholder="ชื่อแมว" />
                                    </Form.Item>
                                    <Form.Item rules={[{ required: true, }]} label="พันธ์" name="type">
                                        <Input placeholder="พันธ์" />
                                    </Form.Item>
                                    <Form.Item rules={[{ required: true, }]} label="อายุ" name="agecat">
                                        <Input placeholder="อายุ" type="number" />
                                    </Form.Item>
                                    <Form.Item rules={[{ required: true, }]} label="ลักษณะพิเศษของน้องแมว" name="detailcat">
                                        <TextArea rows={4} />
                                    </Form.Item>
                                </div>
                                <div className="col-md-8 px-5 card cardnew colw">
                                    <h2 className="text-center">โปรไฟล์เจ้าของ</h2>
                                    <Upload
                                        name="files"
                                        listType="picture-card"
                                        className="avatar-uploader"
                                        showUploadList={false}
                                        // action="http://localhost:1337/upload"
                                        beforeUpload={beforeUpload}
                                        onChange={handleChange2}
                                    >
                                        {imageUrl2 ? <img src={imageUrl2.img} alt="avatar" style={{ display: "block", textAlign: "center", margin: "0 auto", height: "100px", width: "100px" }} /> : uploadButton}
                                    </Upload>
                                    <Form.Item rules={[{ required: true, }]} label="ชื่อเล่น" name="nickname">
                                        <Input placeholder="ชื่อเล่น" />
                                    </Form.Item>
                                    <Form.Item rules={[{ required: true, }]} label="เบอร์ติดต่อ" name="telephone">
                                        <Input placeholder="เบอร์ติดต่อ" />
                                    </Form.Item>
                                    <div className="row my-3">
                                        <div className="col-6">
                                            <Form.Item rules={[{ required: true, }]} label="" name="latlong">
                                                <Input placeholder="พิกัด lat,lng" disabled />
                                            </Form.Item>
                                        </div>
                                        <div className="col-6">
                                            <Button onClick={() => setIsModalVisible(!isModalVisible)} type="primary" style={{ background: "#40949d", borderColor: "#40949d" }} danger block icon={<EnvironmentOutlined style={{ display: "contents", marginTop: "-10px" }} />}>เปิดแผนที่</Button>
                                        </div>
                                    </div>

                                    <Button type="primary" size="large" htmlType="submit" block>บันทึก</Button>
                                </div>
                            </div>
                        </Form>

                    </section>
                </div>
                <Modal title="ปักหมุดบนแผนที่" visible={isModalVisible} onCancel={() => setIsModalVisible(!isModalVisible)} onOk={() => setIsModalVisible(!isModalVisible)} okText="เสร็จสิ้น" cancelButtonProps={{ style: { display: 'none' } }}>
                    <Map isMarkerShown
                        get_latlong={get_latlong}
                        draggable
                        latlong={state.latlong && { lat:state.latlong.lat, lng:state.latlong.lng }}
                    />
                </Modal>
            </div>
            <style global jsx>{`
            html,body {
                transition: background-color 2s ease;
                background: #0d4e1e;
            }
            .cardnew {
                background: #00000078;
                border-radius: 20px;
                }
            .ant-upload.ant-upload-select {
                display: block;
                text-align: center;
                margin: 10px auto;
                background-color: #00000066 !important;


            }
            .ant-upload.ant-upload-select div{
                color:white !important;

            }
            label{
                color:white !important;
            }
            input,textarea{
                background-color: #00000066 !important;
                color:white !important;
            }
            h2{
                color:white;
            }
            .imgprofile{
            width: 170px;
            height: 250px !important;
            }
            .colw {
                background-clip: padding-box;
                border: 5px solid #0000001c;
            }




      `}</style>
        </div>
    )
}

export default Profile
