import React from 'react'
import Button from 'react-bootstrap/Button'
import { IoMdNotifications } from "react-icons/io";

export default function Notification() {
    return (
      <Button variant="light">
        <IoMdNotifications fontSize="large" /> Notifications
      </Button>
    );
}
