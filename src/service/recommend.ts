import { get } from './base'
export interface AlbumProps {
  id: number;
  username: string;
  title: string;
  pic: string;
}

export interface SliderProps {
  id: number;
  link: string;
  pic: string;
}

/**
 * 推荐歌单
 */
export function getRecommend () {
  return get('/api/getRecommend')
}

/**
 * 唱片集
 * @param album
 */
export function getAlbum (album: AlbumProps) {
  return get('/api/getAlbum', {
    id: album.id
  })
}
