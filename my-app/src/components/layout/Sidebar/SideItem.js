import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import { CaretDown, CaretUpFill } from "react-bootstrap-icons";
function SideItem({
    title,
    isActive,
    icon,
    onClick,
    isDropdownOpen,
    DropDown,
}) {
    return (
        <li className={cn(isActive ? "active" : "")} onClick={onClick}>
            <Link className="j_center_link text-decoration-none d-flex gap-2 aling-items-center">
                <div className="d-flex align-items-center">{icon}</div>
                <span className="hide-span">{title}</span>
                <div className="hide-span">
                    {DropDown ? (
                        isDropdownOpen ? (
                            <CaretUpFill />
                        ) : (
                            <CaretDown />
                        )
                    ) : (
                        ""
                    )}
                </div>
            </Link>
        </li>
    );
}

export default SideItem;
