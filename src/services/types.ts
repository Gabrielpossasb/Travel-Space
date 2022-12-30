export interface DataMissionManifest {
   launch_date: string;
   landing_date: string;
   max_date: string;
   name: string;
   status: string;
   total_photos: string;
}

export interface DataHover {
   camera: { id: number, name: string, rover_id: string, full_name:string, },
   earth_date: string,
   id: number,
   img_src: string,
   rover: { id: number, name: string, landing_date: string, launch_date: string, status: string, }
}

export interface ImageDay {
   copyright: string;
   date: string;
   explanation: string;
   hdurl: string;
   title: string;
   url: string;
}