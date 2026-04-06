import useKeyboard from "../../../shared/lib/useKeyboard";
import useMouse from "../../../shared/lib/useMouse";
import { DeviceDimensions } from "../../../shared/config/dimensions";
import { Devices } from "../../../shared/config/device";
import { EventCardDimensions } from "../../../entities/events/config/eventsConfig";
import { GridDimensions } from "../config/gridConfig";
import { Keys } from "../../../shared/config/keys";
import { useLocation, useNavigate } from "react-router";
import { useEffect, useMemo, useState } from "react";
import type { Device } from "../../../shared/config/device";
import type { Event } from "../../../entities/events/model/eventsModel";
import type { Page } from "../../../shared/config/pages";

interface UseGridInputProps {
    data: Event[];
    path: Page;
}

export default function useGridInput({ data, path }: UseGridInputProps) {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [device, setDevice] = useState<Device>(Devices.tvFHD);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [index, setIndex] = useState(state?.index || 0);

    // Calculate grid items and bounds

    const { totalColumns, totalRows } = useMemo(() => {
        const contentWidth = dimensions.width - GridDimensions[device].padding * 2;
        const contentHeight = dimensions.height - GridDimensions[device].padding * 2;
        const cardWidth = EventCardDimensions[device].container.width + EventCardDimensions[device].container.border.width * 2 + GridDimensions[device].margin;
        const cardHeight = EventCardDimensions[device].container.height + EventCardDimensions[device].container.border.width * 2 + GridDimensions[device].margin;
        const totalColumns = Math.max(1, Math.floor(contentWidth / cardWidth));
        const totalRows = Math.max(1, Math.ceil(contentHeight / cardHeight));
        return { totalColumns, totalRows };
    }, [device, dimensions]);

    const bounds = useMemo(() => {
        const minIndex = Math.floor(index / totalColumns) * totalColumns;
        const maxIndex = minIndex + totalColumns * totalRows;
        return { minIndex, maxIndex };
    }, [index, totalColumns, totalRows]);


    // Callbacks & Event handlers

    const callback = (index: number) => {
        setIndex(index);
        navigate(path, { replace: true, state: { event: data[index], index } });
    };

    const onKeyDown = (key: string) => {
        switch (key) {
            case Keys.Right:
                setIndex(Math.min(data.length - 1, index + 1));
                break;
            case Keys.Left:
                setIndex(Math.max(0, index - 1));
                break;
            case Keys.Down:
                if (index + totalColumns >= data.length) return;
                setIndex(Math.min(data.length - 1, index + totalColumns));
                break;
            case Keys.Up:
                if (index < totalColumns) return;
                setIndex(Math.max(0, index - totalColumns));
                break;
            case Keys.Enter:
                callback(index);
                break;
        }
    };
    const onWheel = (event: WheelEvent) => {
        if (event.deltaY > 0) {
            if (index + totalColumns >= data.length) return;
            setIndex(Math.min(data.length - 1, index + totalColumns));
        } else {
            if (index < totalColumns) return;
            setIndex(Math.max(0, index - totalColumns));
        }
    }

    // Keyboard & Mouse hooks

    useEffect(() => {  
        const handleResize = () => {
            const device: Device = window.innerWidth <= DeviceDimensions.mobile.width ? Devices.mobile 
                : window.innerWidth <= DeviceDimensions.tvHD.width ? Devices.tvHD : Devices.tvFHD;
            const gridHeight = window.innerHeight - GridDimensions[device].top;
            const gridWidth = window.innerWidth - GridDimensions[device].left;
            const dimensions = { width: gridWidth, height: gridHeight };
            setDevice(device);
            setDimensions(dimensions);
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useKeyboard({ onKeyDown });
    useMouse({ onWheel });

    // Return values

    return { callback, bounds, index };
}