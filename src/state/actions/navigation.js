import { OPENNAV, CLOSENAV, TOGGLENAV } from './types'

export const openNav = () => ({ type: OPENNAV });
export const closeNav = () => ({ type: CLOSENAV });
export const toggleNav = () => ({ type: TOGGLENAV });
