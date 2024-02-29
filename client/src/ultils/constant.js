import icons from "./icons"

export const path = {
    HOME: '/*',
    HOME__PAGE: ':page',
    LOGIN: 'login',
    CHO_THUE_CAN_HO: 'cho-thue-can-ho',
    CHO_THUE_MAT_BANG: 'cho-thue-mat-bang',
    NHA_CHO_THUE: 'nha-cho-thue',
    CHO_THUE_PHONG_TRO: 'cho-thue-phong-tro',
    DETAL_POST__TITLE__POSTID: 'chi-tiet/:title/:postId',
    SEARCH: 'tim-kiem',
    SYSTEM: '/he-thong/',
    CREATE_POST: 'tao-moi-bai-dang',
    MANAGE_POST: 'quan-ly-bai-dang',
    EDIT_ACCOUNT: 'sua-thong-tin-ca-nhan',
    CONTACT: 'lien-he',
    DETAIL: '/chi-tiet/',
    DETAIL_ALL: 'chi-tiet/*',
    ADMIN: '/admin',
    DASHBOARD: 'tong-quan',
    MANAGE_USER: 'quan-ly-thanh-vien',
    MANAGE_REPORT: 'bao-cao-vi-pham',
    MANAGE_EXPIRED: 'gia-han-bai-dang',
    RESET_PASS: 'reset-mat-khau/:token',
    FINAL_REGISTER: '/xac-nhan-dang-ky-tai-khoan/:status',
    CHANGE_PASSWORD: 'thay-doi-mat-khau',
    CHECKOUT: 'thanh-toan',
    WISHLIST: 'bai-dang-yeu-thich'
}

export const text = {
    HOME_TITLE: 'Kênh thông tin Phòng Trọ uy tín',
    HOME_DESCRIPTION: "Kênh thông tin Phòng Trọ uy tín - Website đăng tin cho thuê phòng trọ, nhà nguyên căn, căn hộ, ở ghép nhanh, hiệu quả với 100.000+ tin đăng và 2.500.000 lượt xem mỗi tháng."
}

export const location = [
    {
        id: 'hcm',
        name: 'Phòng trọ Hồ Chí Minh',
        image: 'https://4.bp.blogspot.com/-yiE49kc2f4s/VPlvB0EEH0I/AAAAAAAAFBg/mp09-GjBj-U/s1600/danh-thang-viet-nam%2B3.jpg',
        provinceCode: 'CUID'
    },
    {
        name: 'Phòng trọ Hà Nội',
        image: 'https://static.vinwonders.com/production/dia-diem-chup-anh-dep-o-ha-noi-banner.jpg',
        id: 'hn',
        provinceCode: 'NDOE'
    },
    {
        name: 'Phòng trọ Đà nẵng',
        image: 'https://www.gotadi.com/tour/wp-content/uploads/2021/12/cau-rong-da-nang.png',
        id: 'dn',
        provinceCode: 'NNNE'
    },
]

export const underMap = ['Bạn đang xem nội dung tin đăng: "', '". Mọi thông tin liên quan đến tin đăng này chỉ mang tính chất tham khảo. Nếu bạn có phản hồi với tin đăng này (báo xấu, tin đã cho thuê, không liên lạc được,...), vui lòng thông báo để PhòngTrọ123 có thể xử lý.']

export const attention = [
    'Nội dung phải viết bằng tiếng Việt có dấu',
    'Tiêu đề tin không dài quá 100 kí tự',
    'Các bạn nên điền đầy đủ thông tin vào các mục để tin đăng có hiệu quả hơn.',
    'Để tăng độ tin cậy và tin rao được nhiều người quan tâm hơn, hãy sửa vị trí tin rao của bạn trên bản đồ bằng cách kéo icon tới đúng vị trí của tin rao.',
    'Tin đăng có hình ảnh rõ ràng sẽ được xem và gọi gấp nhiều lần so với tin rao không có ảnh. Hãy đăng ảnh để được giao dịch nhanh chóng!'
]
const { ImPencil2, TbLayoutDashboard, AiOutlineUser, MdOutlineGroups, MdOutlineReportGmailerrorred, AiOutlineFieldTime } = icons
export const memuSidebar = [
    {
        id: 10,
        text: 'Tổng quan',
        path: path.ADMIN + '/' + path.DASHBOARD,
        icon: <TbLayoutDashboard size={24} />
    },
    {
        id: 30,
        text: 'Quản lý thành viên',
        path: path.ADMIN + '/' + path.MANAGE_USER,
        icon: <MdOutlineGroups size={24} />
    },
    {
        id: 20,
        text: 'Báo cáo vi phạm',
        path: path.ADMIN + '/' + path.MANAGE_REPORT,
        icon: <MdOutlineReportGmailerrorred size={24} />
    },
    {
        id: 80,
        text: 'Yêu cầu gia hạn',
        path: path.ADMIN + '/' + path.MANAGE_EXPIRED,
        icon: <AiOutlineFieldTime size={24} />
    },
    {
        id: 90,
        text: 'Thông tin cá nhân',
        path: path.ADMIN + '/' + path.EDIT_ACCOUNT,
        icon: <AiOutlineUser size={24} />,

    },
]