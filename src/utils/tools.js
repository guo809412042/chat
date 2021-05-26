import { serviceSatus } from './enum';

export const getServiceSatusAttr = (type,attr) => {
  return serviceSatus.find(item => item.type === type)[attr]
}