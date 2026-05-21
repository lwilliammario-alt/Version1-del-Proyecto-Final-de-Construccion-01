using CSoftSmartRetailDesigner.Application.DTOs;

namespace CSoftSmartRetailDesigner.Application.Interfaces;

public interface IProjectService
{
    void CreateProject(CreateProjectDto dto);
}