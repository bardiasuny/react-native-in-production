import { compact, isEmpty, toPlainObject } from "lodash";
import React, { useMemo } from 'react'

export interface BoxProps {
    center?: boolean;
    flex?: number;
    row?: boolean;
    mt?: number;
    mb?:number;
    width?: number;
    height?: number;
    mh?: number;
    mv?: number;
    pv?: number;
    ph?: number;
    pl?: number;
    pt?: number;
    pr?: number;
    pb?: number;
    justifyContent?: string;
    vCenter?: boolean;
    hCenter?: boolean;
    noflex?: boolean;
    backgroundColor?: string;
    ml?: number;
    mr?: number;
    absolute?: boolean;
    fontSize?: number;
    paddingH?: number;
}

const Box = ({
    children,
    center,
    vCenter,
    hCenter,
    flex = 'flex',
    noflex,
    row,
    mt,
    mb,
    mh,
    mv,
    ml,
    mr,
    pv,
    ph,
    pl,
    pt,
    pr,
    pb,
    width,
    height,
    justifyContent,
    alignItems,
    backgroundColor,
    absolute,
    fontSize,
    fontWeight,
    paddingH,
    style,
}) => {

  const st = useMemo(() => 
         [
            { flexDirection: 'column' },
            !noflex && { display: flex },
            center && { justifyContent: 'center', alignItems: 'center' },
            hCenter && { justifyContent: 'center' },
            vCenter && { alignItems: 'center' },
            row && { flexDirection: 'row' },
            !!mt && { marginTop: mt },
            !!mb && { marginBottom: mb },
            !!ml && { marginLeft: ml },
            !!mr && { marginRight: mr },
            !!width && { width },
            !!height && { height },
            !!pl && { paddingLeft: pl },
            !!pt && { paddingTop: pt },
            !!pr && { paddingRight: pr },
            !!pb && { paddingBottom: pb },
            !!paddingH && {paddingLeft: paddingH, paddingRight: paddingH },
            !!justifyContent && { justifyContent },
            !!alignItems && { alignItems },
            !!backgroundColor && { backgroundColor},
            !!absolute && { position: 'absolute' },
            !!fontSize && { fontSize },
            !!fontWeight && { fontWeight },
            style,
        ]
  , [
        center, hCenter, vCenter, row, mt, mb, ml, mr, width, height, pl, pt, 
        pr, pb, justifyContent,backgroundColor, absolute, noflex, style, 
        flex, fontSize, fontWeight, paddingH
    ]) 


    const customStyle = useMemo(() => {
        const customSt = compact(st)
        let combineStyle = {}
        if (!isEmpty(customSt)) {
            customSt.forEach((item) => {
                console.log(item);
                combineStyle = {...combineStyle, ...toPlainObject(item) }
            })
        }
        return combineStyle
    }, [st])
    
    
    return (
        <div style={customStyle}>
            {children}
        </div>
    );
}


export default Box