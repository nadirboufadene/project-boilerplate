import {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios'; 

declare namespace Components {
  namespace Schemas {
    export interface AppointmentDto {
      id: string;
      startingDate: string; // date-time
      endingDate: string; // date-time
      clientId: string;
      staffMemberId: string;
    }
    export interface AppointmentEntity {
      /**
       * Primary key, type uuid.
       * example:
       * 46fb5910-ccb7-11ec-9d64-0242ac120057
       */
      id: string;
      /**
       * Datetime of object creation.
       * example:
       * 2022-05-05T20:21:56.473Z
       */
      created: string;
      /**
       * Datetime of object last update.
       * example:
       * 2022-05-05T20:21:56.473Z
       */
      updated: string;
      /**
       * Datetime of object soft delete, null if not deleted.
       * example:
       * 2022-05-05T20:21:56.473Z
       */
      deleted: string;
      /**
       * Current version of the object.
       * example:
       * 1
       */
      version: number;
      /**
       * The client party.
       * example:
       * {
       *   "id": "46fb5910-ccb7-11ec-9d64-0242ac120002",
       *   "created": "2022-05-05T21:11:04.009Z",
       *   "updated": "2022-05-05T21:11:04.009Z",
       *   "deleted": null,
       *   "version": 1,
       *   "clientName": "Levis",
       *   "appointement": []
       * }
       */
      client: {
        /**
         * Primary key, type uuid.
         * example:
         * 46fb5910-ccb7-11ec-9d64-0242ac120057
         */
        id: string;
        /**
         * Datetime of object creation.
         * example:
         * 2022-05-05T20:21:56.473Z
         */
        created: string;
        /**
         * Datetime of object last update.
         * example:
         * 2022-05-05T20:21:56.473Z
         */
        updated: string;
        /**
         * Datetime of object soft delete, null if not deleted.
         * example:
         * 2022-05-05T20:21:56.473Z
         */
        deleted: string;
        /**
         * Current version of the object.
         * example:
         * 1
         */
        version: number;
        /**
         * Client's name.
         * example:
         * Levis
         */
        clientName: string;
      };
      /**
       * The staffmember party.
       * example:
       * {
       *   "id": "ab63ef3a-cca2-11ec-9d64-0242ac120003",
       *   "created": "2022-05-05T20:21:56.473Z",
       *   "updated": "2022-05-05T20:21:56.473Z",
       *   "deleted": null,
       *   "version": 1,
       *   "firstname": "Nadir",
       *   "lastname": "Boufadene",
       *   "appointement": []
       * }
       */
      staffMember: {
        /**
         * Primary key, type uuid.
         * example:
         * 46fb5910-ccb7-11ec-9d64-0242ac120057
         */
        id: string;
        /**
         * Datetime of object creation.
         * example:
         * 2022-05-05T20:21:56.473Z
         */
        created: string;
        /**
         * Datetime of object last update.
         * example:
         * 2022-05-05T20:21:56.473Z
         */
        updated: string;
        /**
         * Datetime of object soft delete, null if not deleted.
         * example:
         * 2022-05-05T20:21:56.473Z
         */
        deleted: string;
        /**
         * Current version of the object.
         * example:
         * 1
         */
        version: number;
        /**
         * StaffMember's firstname.
         * example:
         * John
         */
        firstname: string;
        /**
         * StaffMember's lastname.
         * example:
         * Doe
         */
        lastname: string;
        /**
         * Starting date of the appointment.
         * example:
         * 2022-05-09T06:00:00.000
         */
        appointments: string[];
      };
      /**
       * Starting date of the appointment.
       * example:
       * 2022-05-09T06:00:00.000
       */
      startingDate: string; // date-time
      /**
       * Ending date of the appointment.
       * example:
       * 2022-05-09T06:30:00.000Z
       */
      endingDate: string; // date-time
    }
    export interface Client {
      /**
       * Primary key, type uuid.
       * example:
       * 46fb5910-ccb7-11ec-9d64-0242ac120057
       */
      id: string;
      /**
       * Datetime of object creation.
       * example:
       * 2022-05-05T20:21:56.473Z
       */
      created: string;
      /**
       * Datetime of object last update.
       * example:
       * 2022-05-05T20:21:56.473Z
       */
      updated: string;
      /**
       * Datetime of object soft delete, null if not deleted.
       * example:
       * 2022-05-05T20:21:56.473Z
       */
      deleted: string;
      /**
       * Current version of the object.
       * example:
       * 1
       */
      version: number;
      /**
       * Client's name.
       * example:
       * Levis
       */
      clientName: string;
    }
    export interface ClientDto {
      id: string;
      clientName: string;
    }
    export interface StaffMemberDto {
      id: string;
      firstname: string;
      lastname: string;
    }
    export interface StaffMemberEntity {
      /**
       * Primary key, type uuid.
       * example:
       * 46fb5910-ccb7-11ec-9d64-0242ac120057
       */
      id: string;
      /**
       * Datetime of object creation.
       * example:
       * 2022-05-05T20:21:56.473Z
       */
      created: string;
      /**
       * Datetime of object last update.
       * example:
       * 2022-05-05T20:21:56.473Z
       */
      updated: string;
      /**
       * Datetime of object soft delete, null if not deleted.
       * example:
       * 2022-05-05T20:21:56.473Z
       */
      deleted: string;
      /**
       * Current version of the object.
       * example:
       * 1
       */
      version: number;
      /**
       * StaffMember's firstname.
       * example:
       * John
       */
      firstname: string;
      /**
       * StaffMember's lastname.
       * example:
       * Doe
       */
      lastname: string;
      /**
       * Starting date of the appointment.
       * example:
       * 2022-05-09T06:00:00.000
       */
      appointments: string[];
    }
  }
}
declare namespace Paths {
  namespace AppointmentControllerCreate {
    export type RequestBody = Components.Schemas.AppointmentDto;
    namespace Responses {
      export type $201 = Components.Schemas.AppointmentEntity;
    }
  }
  namespace AppointmentControllerGetAll {
    namespace Responses {
      export type $200 = Components.Schemas.AppointmentEntity[];
    }
  }
  namespace ClientControllerCreate {
    export type RequestBody = Components.Schemas.ClientDto;
    namespace Responses {
      export type $201 = Components.Schemas.Client;
    }
  }
  namespace ClientControllerGetAll {
    namespace Responses {
      export type $200 = Components.Schemas.Client[];
    }
  }
  namespace StaffMemberControllerCreate {
    export type RequestBody = Components.Schemas.StaffMemberDto;
    namespace Responses {
      export type $201 = Components.Schemas.StaffMemberEntity;
    }
  }
  namespace StaffMemberControllerGetAll {
    namespace Responses {
      export type $200 = Components.Schemas.StaffMemberEntity[];
    }
  }
}

export interface OperationMethods {
  /**
   * AppController_getHello
   */
  'AppController_getHello'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<any>
  /**
   * StaffMemberController_getAll
   */
  'StaffMemberController_getAll'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.StaffMemberControllerGetAll.Responses.$200>
  /**
   * StaffMemberController_create
   */
  'StaffMemberController_create'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.StaffMemberControllerCreate.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.StaffMemberControllerCreate.Responses.$201>
  /**
   * AppointmentController_getAll
   */
  'AppointmentController_getAll'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppointmentControllerGetAll.Responses.$200>
  /**
   * AppointmentController_create
   */
  'AppointmentController_create'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.AppointmentControllerCreate.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppointmentControllerCreate.Responses.$201>
  /**
   * ClientController_getAll
   */
  'ClientController_getAll'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ClientControllerGetAll.Responses.$200>
  /**
   * ClientController_create
   */
  'ClientController_create'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.ClientControllerCreate.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ClientControllerCreate.Responses.$201>
}

export interface PathsDictionary {
  ['/api']: {
    /**
     * AppController_getHello
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<any>
  }
  ['/api/staff-members']: {
    /**
     * StaffMemberController_getAll
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.StaffMemberControllerGetAll.Responses.$200>
    /**
     * StaffMemberController_create
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.StaffMemberControllerCreate.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.StaffMemberControllerCreate.Responses.$201>
  }
  ['/api/appointments']: {
    /**
     * AppointmentController_getAll
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppointmentControllerGetAll.Responses.$200>
    /**
     * AppointmentController_create
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.AppointmentControllerCreate.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppointmentControllerCreate.Responses.$201>
  }
  ['/api/clients']: {
    /**
     * ClientController_getAll
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ClientControllerGetAll.Responses.$200>
    /**
     * ClientController_create
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.ClientControllerCreate.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ClientControllerCreate.Responses.$201>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>
