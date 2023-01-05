export interface DataMissionManifest {
   launch_date: string;
   landing_date: string;
   max_date: string;
   name: string;
   status: string;
   total_photos: string;
}

export interface DataRover {
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

export interface RoversType {
   id: number;
   name: string;
   landing_date: string;
   launch_date: string;
   status: string;
   max_date: string;
   total_photos: number;
   cameras: [ {
      id: number,
      name: string,
      full_name: string,
   }, ];
}

export interface NearbyType {
   diameter: string;
   id: string;
   n_imp: number;
   last_obs: string;
   des: string;
   v_inf: string;
}