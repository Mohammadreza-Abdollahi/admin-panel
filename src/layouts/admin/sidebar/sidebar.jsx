import Profile from '../../../assets/img/profile.png'
import SidebarAvatar from './SidebarAvatar';
import SidebarGroupItem from './SidebarGroupItem';
import SidebarItem from './SidebarItem';
import { faGaugeHigh , faBoxesStacked , faBoxOpen , faCopyright , faCertificate , faPalette , faPercent , faCartPlus , faDolly , faTruck , faUsers , faUserPen , faShieldHalved , faCircleInfo , faComment } from '@fortawesome/free-solid-svg-icons';

const Aside = () => {
    return ( 
        <>
            <section className="overflow-hidden group text-nowrap max-w-24 min-w-24 z-50 hover:min-w-80 transition-all hover:transition-all ease-in-out duration-300 hover:duration-300 hover:z-50 fixed h-full inline-block pt-3 px-5 bg-gray-500 shadow-2xl border-l-2 border-palete-2-400-1">
                <SidebarAvatar profile={Profile}/>
                <section>
                <SidebarItem itemPath={'/'} icon={faGaugeHigh} title='داشبورد'/>
                </section>
                <section className='my-2'>
                    <SidebarGroupItem title='فروشگاه'/>
                    <SidebarItem itemPath={'/categories'} icon={faBoxesStacked} title='مدیریت گروه محصول'/>
                    <SidebarItem itemPath={'/products'} icon={faBoxOpen} title='مدیریت محصول'/>
                    <SidebarItem itemPath={'/brands'} icon={faCopyright} title='مدیریت برند ها'/>
                    <SidebarItem itemPath={'/guaranties'} icon={faCertificate} title='مدیریت گارانتی ها'/>
                    <SidebarItem itemPath={'/colors'} icon={faPalette} title='مدیریت رنگ ها'/>
                    <SidebarItem itemPath={'/discounts'} icon={faPercent} title='مدیریت تخفیف ها'/>
                </section>
                <section className='my-2'>
                    <SidebarGroupItem title='سفارشات و سید'/>
                    <SidebarItem itemPath={'/carts'} icon={faCartPlus} title='مدیریت سبد ها'/>
                    <SidebarItem itemPath={'/orders'} icon={faDolly} title='مدیریت سفارشات'/>
                    <SidebarItem itemPath={'/deliveries'} icon={faTruck} title='مدیریت نحوه  ارسال'/>
                </section>
                <section className='my-2'>
                    <SidebarGroupItem title='کاربران و همکاران'/>
                    <SidebarItem itemPath={'/users'} icon={faUsers} title='مشاهده کاربران'/>
                    <SidebarItem itemPath={'/roles'} icon={faUserPen} title='نقش ها'/>
                    <SidebarItem itemPath={'/permissions'} icon={faShieldHalved} title='مجوز ها'/>
                </section>
                <section className='my-2'>
                    <SidebarGroupItem title='ارتباطات'/>
                    <SidebarItem itemPath={'/questions'} icon={faCircleInfo} title='راهنما'/>
                    <SidebarItem itemPath={'/comments'} icon={faComment} title='کامنت ها'/>
                </section>
            </section>
        </>
     );
}
 
export default Aside;