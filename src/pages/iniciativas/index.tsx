import { useEffect } from 'react';
import Hero from '../../components/Hero';
import Layout from '../../components/Layout';
import { postInitiative } from '../../lib/api';

const InitiativesPage: React.FC = ({}) => {
  const testData = {
    _type: 'reactGroup',
    name: 'Nombre',
    topic: 'Tema',
    studyMaterial: 'Material',
    teamLeader: 'Team Leader',
    teamMembers: 'Her Test',
    meetingType: 'Her Test',
    plan: 'Her Test',
    date: 'Her Test',
  };

  return (
    <Layout title="Iniciativas">
      <Hero small title="Iniciativas" />
      <div className="bg-indigo-100 sm:pt-10 pb-24">
        <div className=" container mx-auto min-h-screen bg-white overflow-hidden shadow rounded-lg">
          <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
            <div className="mt-2 md:flex md:items-center md:justify-between">
              <div className="flex-1 min-w-0">
                <h2 className="text-xl font-bold leading-7 text-primary sm:text-2xl sm:leading-9 sm:truncate">
                  Iniciativas
                </h2>
              </div>
            </div>
          </div>

          <form
            id="form"
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full grid grid-cols-2 gap-5"
          >
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                Nombre del grupo
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="name"
                id="name"
                type="text"
                placeholder="Nombre del grupo"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Tema</label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="tel"
                id="tel"
                type="tel"
                placeholder="Ingresa el tema"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                Material de estudio
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                id="email"
                type="email"
                placeholder="Ingresa el material de estudio"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                Representante del grupo
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                id="email"
                type="email"
                placeholder="Ingresa tu user de discord"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                Fecha de inicio
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="date"
                id="date"
                type="date"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                Estilo de reuniones
              </label>
              <textarea
                rows={5}
                className="appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="message1"
                placeholder="Ingresa la dinamica que se va a utilizar en su grupo de estudio"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                Plan de estudio
              </label>
              <textarea
                rows={5}
                className="appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="message2"
                id="message2"
                placeholder="Ingresa como va a ser el plan de estudio"
                required
              ></textarea>
            </div>

            <div className="pt-5">
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primarydark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default InitiativesPage;
