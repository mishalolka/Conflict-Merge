import cn from "classnames";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {
    Bag,
    BoxArrowRight,
    Cash,
    GraphUp,
    List,
    Receipt,
    Translate,
} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import useCachierAuth from "../../../hooks/useCachierAuth";
import useDepartmentAuth from "../../../hooks/useDepartmentAuth";
import useI18n from "../../../hooks/useI18n";
import { showSideBarState } from "../../../state/ui";
import СonfirmationModal from "../../UI/СonfirmationModal/СonfirmationModal";
import SideItem from "./SideItem";

import useModals from "../../../hooks/useModals";
import LabelGroup from "../Topbar/LabelGroup";

function Sidebar() {
    const [activeItem, setActiveItem] = useState("selling");
    const { departmentLogout } = useDepartmentAuth();
    const { cachierLogout } = useCachierAuth();
    const navigate = useNavigate();
    const [showSideBar, setShowSideBar] = useRecoilState(showSideBarState);
    const { l } = useI18n();
    const { department } = useDepartmentAuth();
    const { setShowLangModal } = useModals();
    const { cachier } = useCachierAuth();

    const sideItemHandler = ({ name, path }) => {
        setActiveItem(name);
        navigate(path);
    };

    const signOutHandler = () => {
        cachierLogout();
        departmentLogout();
    };
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const openLogoutModal = () => {
        setShowLogoutModal(true);
    };
    const closeLogoutModal = () => {
        setShowLogoutModal(false);
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const [isHrShow, setIsHrShow] = useState(false);
    const toggleHr = () => {
        setIsHrShow(!isHrShow);
    };
    const hrContent = isHrShow ? (
        <hr className="h-color mx-3 hide-span" />
    ) : null;
    const dropdownContent = isDropdownOpen ? (
        <ul className="text-white hide-span settings px-2">
            {department?.decoded?.login ? (
                <div>
                    <div className="d-flex justify-content-center">
                        <LabelGroup
                            title={l("login")}
                            label={department?.decoded?.login}
                        />
                    </div>
                    <div className="d-flex justify-content-center"></div>
                    <LabelGroup
                        title={l("Group")}
                        label={department?.decoded?.salesGroup}
                    />
                </div>
            ) : null}
            {cachier?.decoded?.login ? (
                <LabelGroup
                    title={l("Cachier")}
                    label={cachier?.decoded?.login}
                />
            ) : null}
        </ul>
    ) : null;
    return (
        <div className={cn("sidebar", showSideBar && "active")} id="side_nav">
            <div className="d-flex justify-content-center align-items-center mt-3 mb-3">
                <Button
                    className="x-button d-flex justify-content-center align-items-center border-white"
                    onClick={() => {
                        setShowSideBar(!showSideBar);
                    }}
                >
                    <List size={30} color={"white"} />
                </Button>
            </div>

            <div className="text-center pb-1 d-flex flex-column hide-span">
                <span className="h2 fs-4 p-1 text-light text-nowrap">
                    {l("ERPJS POS")}
                </span>
                <span className="h6 p-1 text-light text-nowrap">
                    {department?.decoded?.login}
                </span>
            </div>

            <hr className="h-color mx-3" />
            <ul className="list-unstyled px-2">
                <SideItem
                    isActive={activeItem === "selling"}
                    title={l("Selling")}
                    icon={<Cash size={24} />}
                    onClick={() =>
                        sideItemHandler({ name: "selling", path: "/" })
                    }
                />
                <SideItem
                    isActive={activeItem === "invoices"}
                    title={l("Invoices")}
                    icon={<Receipt size={24} />}
                    onClick={() =>
                        sideItemHandler({ name: "invoices", path: "/invoices" })
                    }
                />
                <SideItem
                    isActive={activeItem === "items"}
                    title={l("Items")}
                    icon={<Bag size={24} />}
                    onClick={() =>
                        sideItemHandler({ name: "items", path: "/items" })
                    }
                    to="/items"
                />
                <SideItem
                    isActive={activeItem === "reports"}
                    title={l("Reports")}
                    icon={<GraphUp size={24} />}
                    onClick={() =>
                        sideItemHandler({ name: "reports", path: "/reports" })
                    }
                />
                {/* <SideItem
            title={l("Settings")}
            icon={<Gear size={24} />}
            onClick={() => {toggleDropdown(); toggleHr(); setShowSideBar(false)}}
            isDropdownOpen={isDropdownOpen}
            DropDown={true}
          /> */}
                {/* <SideItem
                isActive={activeItem==='test'}
                title={l('Test')}
                icon={<List size={20} />}
                onClick={() => sideItemHandler({ name: 'test', path: '/test' })}
            /> */}
            </ul>
            {hrContent}
            {dropdownContent}

            <hr className="h-color mx-3" />

            <ul className="list-unstyled px-2">
                <SideItem
                    title={l("Language")}
                    icon={<Translate size={24} />}
                    onClick={() => setShowLangModal(true)}
                />
                <SideItem
                    title={l("Logout")}
                    icon={<BoxArrowRight size={24} />}
                    onClick={openLogoutModal}
                />
                <СonfirmationModal
                    showСonfirmationModal={showLogoutModal}
                    setShowСonfirmationModal={closeLogoutModal}
                    confirmationHandler={signOutHandler}
                    title={l("Confirmation")}
                    content={l("Are you sure to logout?")}
                    firstButtonText={l("Cancel")}
                    secondButtonText={l("Logout")}
                />
            </ul>
        </div>
    );
}

export default Sidebar;
